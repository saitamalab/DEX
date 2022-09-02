import { SignerWithAddress } from "../node_modules/@nomiclabs/hardhat-ethers/signers";
import { ethers, network } from "hardhat";
import {
  expandTo18Decimals,
  expandTo6Decimals,
} from "../test/utilities/utilities";
import {
  SaitaSwapFactory,
} from "../typechain";

function sleep(ms: any) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function main() {
  // We get the contract to deploy

  const factory1 = await ethers.getContractFactory("SaitaSwapFactory");
  const factory = await factory1.deploy("0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0");
  await sleep(6000);
  console.log("Factory Deployed", factory.address);
  await sleep(1000);
  console.log("INITCODE: ",await factory.INIT_CODE_PAIR_HASH());
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

  // factory address = 0x19E5ebC005688466d11015e646Fa182621c1881e
  // init hash = 0x49d9acd3e20042617be7e378294c731749bc579b09dfd560cd3357445ce0b9e9 

  // factory BSC = 0x6E201B30835033855125bdCfc06Bf5efFD4b75E8
  // init hash = 0x49d9acd3e20042617be7e378294c731749bc579b09dfd560cd3357445ce0b9e9