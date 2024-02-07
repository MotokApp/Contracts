
async function mainVault() {
    const ERC4626Fees = await ethers.getContractFactory("ERC4626Fees");
    const vaultAssetAddress = "0xdE2C43b9AACe77a1aa0EaC395345Ba612b7Eab6B"; // Replace with the actual address of the vault asset
    const vaultEntryFeeBasisPoints = 2; // Replace with the desired entry fee basis points
    const vaultExitFeeBasisPoints = 1; // Replace with the desired exit fee basis points

    const erc4626Fees = await ERC4626Fees.deploy(
        vaultAssetAddress,
        vaultEntryFeeBasisPoints,
        vaultExitFeeBasisPoints
    );

    await erc4626Fees.deployed();

    console.log("ERC4626Fees deployed to:", erc4626Fees.address);
}

mainVault()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
});