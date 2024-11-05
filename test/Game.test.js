const Game = artifacts.require("Game");

contract("Game", (accounts) => {
    let game;

    before(async () => {
        game = await Game.deployed();
    });

    it("should mint a new NFT", async () => {
        await game.mint("https://example.com/token/1");
        const owner = await game.ownerOf(0);
        assert.equal(owner, accounts[0]);
    });

    it("should return the correct token URI", async () => {
        const uri = await game.tokenURIs(0);
        assert.equal(uri, "https://example.com/token/1");
    });
});
