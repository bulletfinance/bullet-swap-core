pragma solidity =0.5.16;

import '../BulletERC20.sol';

contract ERC20 is BulletERC20 {
    constructor(uint _totalSupply) public {
        _mint(msg.sender, _totalSupply);
    }
}
