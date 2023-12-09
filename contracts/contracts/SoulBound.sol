// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;
 
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Counters.sol"; 
 
contract SoulBound is ERC721, ERC721URIStorage, Ownable {
    using Counters for Counters.Counter;
 
    Counters.Counter private _tokenIdCounter;
    mapping( address => bytes) private zkProofs;
    constructor() ERC721("OneKYC", "OKYC") {}
 
    function safeMint(address to, string memory uri, bytes memory zkProof) public onlyOwner {
        uint256 tokenId = _tokenIdCounter.current();
        _tokenIdCounter.increment();
        _safeMint(to, tokenId);
        _setTokenURI(tokenId, uri);
        zkProofs[to] = zkProof;
    }
 
    // The following functions are overrides required by Solidity.
 
    function _burn(uint256 tokenId) internal override(ERC721, ERC721URIStorage) {
        super._burn(tokenId);
    }
 
    function getProof(address user) public view returns (bytes memory) {
        return zkProofs[user];
    }

    function tokenURI(uint256 tokenId)
        public
        view
        override(ERC721, ERC721URIStorage)
        returns (string memory)
    {
        return super.tokenURI(tokenId);
    }
}
 