import fs from "fs";
import path from "path";
import { request, gql } from "graphql-request";
import { getAddress } from "@ethersproject/address";
import slugify from "slugify";

const pathToImages = process.env.CI
  ? path.join(process.env.GITHUB_WORKSPACE, "packages", "token-lists", "lists", "images")
  : path.join(path.resolve(), "lists", "images");
const logoFiles = fs.readdirSync(pathToImages);

// Interface for Bitquery GraphQL response.
interface BitqueryEntity {
  // eslint-disable-next-line camelcase
  Total_USD: number;
  baseCurrency: {
    address: string;
    name: string;
    symbol: string;
    decimals: number;
  };
}

// Default token list for exchange + manual exclusion of broken BEP-20 token(s)
const blacklist: string[] = [
  // List of default tokens to exclude
  "0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270", // WMATIC
  "0xAFC9AA5ebd7197662D869F75890F18AafEEFb1f5", // JAVA
  "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174", // USDC
];

/**
 * Return today / 1 month ago ISO-8601 DateTime.
 *
 * @returns string[]
 */
const getDateRange = (): string[] => {
  const today = new Date();
  const todayISO = today.toISOString();
  today.setMonth(today.getMonth() - 1);
  const monthAgoISO = today.toISOString();

  return [todayISO, monthAgoISO];
};

/**
 * Fetch Top100 Tokens traded on JavaSwap v2, ordered by trading volume,
 * for the past 30 days, filtered to remove default / broken tokens.
 *
 * @returns BitqueryEntity[]]
 */
const getTokens = async (): Promise<BitqueryEntity[]> => {
  try {
    const [today, monthAgo] = getDateRange();

    const { ethereum } = await request(
      "https://graphql.bitquery.io/",
      gql`
        query ($from: ISO8601DateTime, $till: ISO8601DateTime, $blacklist: [String!]) {
          ethereum(network: bsc) {
            dexTrades(
              options: { desc: "Total_USD", limit: 100 }
              exchangeName: { is: "Java v2" }
              baseCurrency: { notIn: $blacklist }
              date: { since: $from, till: $till }
            ) {
              Total_USD: tradeAmount(calculate: sum, in: USD)
              baseCurrency {
                address
                name
                symbol
                decimals
              }
            }
          }
        }
      `,
      {
        from: monthAgo,
        till: today,
        blacklist,
      }
    );

    return ethereum.dexTrades;
  } catch (error) {
    return error;
  }
};

/**
 * Returns the URI of a token logo
 * Note: If present in extended list, use main logo, else fallback to TrustWallet
 *
 * @returns string
 */
const getTokenLogo = (address: string): string => {
  // Note: fs.existsSync can't be used here because its not case sensetive
  if (logoFiles.includes(`${address}.png`)) {
    return `https://tokens.javaswap.io/images/${address}.png`;
  }

  return `https://assets.trustwalletapp.com/blockchains/polygon/assets/${address}/logo.png`;
};

/**
 * Main function.
 * Fetch tokems, build list, save list.
 */
const main = async (): Promise<void> => {
  try {
    const tokens = await getTokens();

    const sanitizedTokens = tokens.reduce((list, item: BitqueryEntity) => {
      const checksummedAddress = getAddress(item.baseCurrency.address);

      const updatedToken = {
        name: slugify(item.baseCurrency.name, {
          replacement: " ",
          remove: /[^\w\s.]/g,
        }),
        symbol: slugify(item.baseCurrency.symbol, {
          replacement: "-",
          remove: /[^\w\s.]/g,
        }).toUpperCase(),
        address: checksummedAddress,
        chainId: 137,
        decimals: item.baseCurrency.decimals,
        logoURI: getTokenLogo(checksummedAddress),
      };
      return [...list, updatedToken];
    }, []);

    const tokenListPath = `${path.resolve()}/src/tokens/javaswap-top-100.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(sanitizedTokens, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
  } catch (error) {
    console.error(`Error when fetching Top100 Tokens by volume for the past 30 days, error: ${error.message}`);
  }
};

export default main;
