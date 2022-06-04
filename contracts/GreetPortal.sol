// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    uint256 totalGreet;

    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function Greet() public {
        totalGreet += 1;
        console.log("%s has Greeted!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total Greetes!", totalGreet);
        return totalGreet;
    }
}
