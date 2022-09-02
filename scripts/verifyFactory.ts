const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0xf63a58f912016bF7745C23f6eA9668181b5E468c",
        constructorArguments: ["0x8008985282aCa5835F09c3ffE09C9B380b2cEFd0"],
        contract: "contracts/SaitaSwapFactory.sol:SaitaSwapFactory",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});