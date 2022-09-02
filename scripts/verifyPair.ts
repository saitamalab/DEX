const hre = require("hardhat");
import {
    expandTo18Decimals,
    expandTo6Decimals,
  } from "../test/utilities/utilities";

async function main() {

    console.log("after");
  
    await hre.run("verify:verify", {
        address: "0xcdA1c632df93B72be5c7839b4dB8dd63001F3c71",
        constructorArguments: [],
        contract: "contracts/SaitaSwapPair.sol:SaitaSwapPair",
      });
    
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});