import { ethers } from "hardhat";

async function main() {
  console.log(process.env.ALCHEMY_API_URL);
  const provider = new ethers.JsonRpcProvider("");
  const wallet = new ethers.Wallet("", provider)

  const lock = await ethers.deployContract("SoulBound", wallet);

  await lock.waitForDeployment();

  console.log( lock.getAddress());
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
