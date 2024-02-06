import { ethers } from "hardhat";
import { expect } from "chai";

describe("Token", function () {
  it("should mint tokens to the recipient", async function () {
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    await token.deployed();

    const recipient = "0xdE2C43b9AACe77a1aa0EaC395345Ba612b7Eab6B";
    const amount = 1000000000;

    await token.initialMint(recipient, amount);

    const recipientBalance = await token.balanceOf(recipient);
    expect(recipientBalance).to.equal(amount);
  });
});