import addresses from "../constants/contracts";
import { MAINNET_CHAIN_ID, TESTNET_CHAIN_ID } from "../constants/common";
import { getJavaProfileAddress } from "./addressHelpers";

describe("addressHelpers", () => {
  it("getAddress returns correct mainnet address", () => {
    const profileAddress = getJavaProfileAddress(MAINNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.javaProfile[MAINNET_CHAIN_ID]);
  });
  it("getAddress returns correct testnet address", () => {
    const profileAddress = getJavaProfileAddress(TESTNET_CHAIN_ID);
    expect(profileAddress).toBe(addresses.javaProfile[TESTNET_CHAIN_ID]);
  });
});
