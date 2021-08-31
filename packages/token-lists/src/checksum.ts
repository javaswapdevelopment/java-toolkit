import fs from "fs";
import path from "path";
import { getAddress } from "@ethersproject/address";
import javaswapDefault from "./tokens/javaswap-default.json";
import javaswapExtended from "./tokens/javaswap-extended.json";
import javaswapTop100 from "./tokens/javaswap-top-100.json";
import javaswapTop15 from "./tokens/javaswap-top-15.json";

const lists = {
  "javaswap-default": javaswapDefault,
  "javaswap-extended": javaswapExtended,
  "javaswap-top-100": javaswapTop100,
  "javaswap-top-15": javaswapTop15
};

const checksumAddresses = (listName: string): void => {
  let badChecksumCount = 0;
  const listToChecksum = lists[listName];
  const updatedList = listToChecksum.reduce((tokenList, token) => {
    const checksummedAddress = getAddress(token.address);
    if (checksummedAddress !== token.address) {
      badChecksumCount += 1;
      const updatedToken = { ...token, address: checksummedAddress };
      return [...tokenList, updatedToken];
    }
    return [...tokenList, token];
  }, []);

  if (badChecksumCount > 0) {
    console.info(`Found and fixed ${badChecksumCount} non-checksummed addreses`);
    const tokenListPath = `${path.resolve()}/src/tokens/${listName}.json`;
    console.info("Saving updated list to ", tokenListPath);
    const stringifiedList = JSON.stringify(updatedList, null, 2);
    fs.writeFileSync(tokenListPath, stringifiedList);
    console.info("Checksumming done!");
  } else {
    console.info("All addresses are already checksummed");
  }
};

export default checksumAddresses;
