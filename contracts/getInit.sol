// SPDX-License-Identifier: MIT
pragma solidity =0.5.16;
import "./SaitaSwapPair.sol";


contract CalHash {


    function getInitHash() public pure returns(bytes32){
        bytes memory bytecode = type(SaitaSwapPair).creationCode;
        return keccak256(abi.encodePacked(bytecode));
         
    }
}