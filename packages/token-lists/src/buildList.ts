import fs from "fs";
import path from "path";
import { TokenList } from "@uniswap/token-lists";
import { version as javaswapDefaultVersion } from "../lists/javaswap-default.json";
import { version as javaswapExtendedVersion } from "../lists/javaswap-extended.json";
import { version as javaswapTop15Version } from "../lists/javaswap-top-15.json";
import { version as javaswapTop100Version } from "../lists/javaswap-top-100.json";
import javaswapDefault from "./tokens/javaswap-default.json";
import javaswapExtended from "./tokens/javaswap-extended.json";
import javaswapTop100 from "./tokens/javaswap-top-100.json";
import javaswapTop15 from "./tokens/javaswap-top-15.json";

export enum VersionBump {
  "major" = "major",
  "minor" = "minor",
  "patch" = "patch",
}

type Version = {
  major: number;
  minor: number;
  patch: number;
};

const lists = {
  "javaswap-default": {
    list: javaswapDefault,
    name: "JavaSwap Default",
    keywords: ["javaswap", "default"],
    logoURI:
      "https://tokens.javaswap.io/images/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png",
    sort: false,
    currentVersion: javaswapDefaultVersion,
  },
  "javaswap-extended": {
    list: javaswapExtended,
    name: "JavaSwap Extended",
    keywords: ["javaswap", "extended"],
    logoURI:
      "https://tokens.javaswap.io/images/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png",
    sort: true,
    currentVersion: javaswapExtendedVersion,
  },
  "javaswap-top-100": {
    list: javaswapTop100,
    name: "JavaSwap Top 100",
    keywords: ["javaswap", "top 100"],
    logoURI:
      "https://tokens.javaswap.io/images/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png",
    sort: true,
    currentVersion: javaswapTop100Version,
  },
  "javaswap-top-15": {
    list: javaswapTop15,
    name: "JavaSwap Top 15",
    keywords: ["javaswap", "top 15"],
    logoURI:
      "https://tokens.javaswap.io/images/0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270.png",
    sort: true,
    currentVersion: javaswapTop15Version,
  },
};

const getNextVersion = (currentVersion: Version, versionBump?: VersionBump) => {
  const { major, minor, patch } = currentVersion;
  switch (versionBump) {
    case VersionBump.major:
      return { major: major + 1, minor, patch };
    case VersionBump.minor:
      return { major, minor: minor + 1, patch };
    case VersionBump.patch:
    default:
      return { major, minor, patch: patch + 1 };
  }
};

export const buildList = (listName: string, versionBump?: VersionBump): TokenList => {
  const { list, name, keywords, logoURI, sort, currentVersion } = lists[listName];
  const version = getNextVersion(currentVersion, versionBump);
  return {
    name,
    timestamp: new Date().toISOString(),
    version,
    logoURI,
    keywords,
    // sort them by symbol for easy readability (not applied to default list)
    tokens: sort
      ? list.sort((t1, t2) => {
          if (t1.chainId === t2.chainId) {
            // JAVA first in extended list
            if ((t1.symbol === "JAVA") !== (t2.symbol === "JAVA")) {
              return t1.symbol === "JAVA" ? -1 : 1;
            }
            return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
          }
          return t1.chainId < t2.chainId ? -1 : 1;
        })
      : list,
  };
};

export const saveList = (tokenList: TokenList, listName: string): void => {
  const tokenListPath = `${path.resolve()}/lists/${listName}.json`;
  const stringifiedList = JSON.stringify(tokenList, null, 2);
  fs.writeFileSync(tokenListPath, stringifiedList);
  console.info("Token list saved to ", tokenListPath);
};
