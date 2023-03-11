// SPDX-License-Identifier: MIT LICENSE


pragma solidity 0.8.4;

import "@openzeppelin/contracts/token/ERC721/IERC721Receiver.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721Enumerable.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Custody721 is IERC721Receiver, ReentrancyGuard, Ownable {

  uint256 public costCustom = 1 ether;
  uint256 public costNative = 0.000075 ether;

  struct Custody {
    uint256 tokenId;
    address holder;
  }

  mapping(uint256 => Custody) public holdCustody;

  event NFTCustody (
    uint256 indexed tokenId,
    address holder
  );


  ERC721Enumerable nft;
  IERC20 paytoken;

   constructor(ERC721Enumerable _nft, IERC20 _paytoken) {
    nft = _nft;
    paytoken = _paytoken;
  }

  function retainNFTC(address user, uint256 tokenId) public payable nonReentrant onlyOwner{
      paytoken.transferFrom(user, msg.sender, costCustom);
      holdCustody[tokenId] =  Custody(tokenId, msg.sender);
      nft.transferFrom(user, address(this), tokenId);
      emit NFTCustody(tokenId, user);
  }

  function retainNFTN(address user, uint256 tokenId) public payable nonReentrant onlyOwner{
      holdCustody[tokenId] =  Custody(tokenId, msg.sender);
      nft.transferFrom(user, address(this), tokenId);
      emit NFTCustody(tokenId, user);
  }

  function onERC721Received(
        address,
        address from,
        uint256,
        bytes calldata
    ) external pure override returns (bytes4) {
      require(from == address(0x0), "Cannot Receive NFTs Directly");
      return IERC721Receiver.onERC721Received.selector;
    }
  
  function withdrawCustom() public payable onlyOwner() {
    paytoken.transfer(msg.sender, paytoken.balanceOf(address(this)));
    }

  function withdrawNative() public payable onlyOwner() {
    require(payable(msg.sender).send(address(this).balance));
    }
  
}