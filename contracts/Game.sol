// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Game is ERC721, Ownable {
    uint256 public nextTokenId;
    mapping(uint256 => string) public tokenURIs;

    constructor() ERC721("CardGame", "CARD") {}

    function mint(string memory _tokenURI) external onlyOwner {
        uint256 tokenId = nextTokenId;
        _safeMint(msg.sender, tokenId);
        tokenURIs[tokenId] = _tokenURI;
        nextTokenId++;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return "https://api.yourgame.com/cards/";
    }
}
