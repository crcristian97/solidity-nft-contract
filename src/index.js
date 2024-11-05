import Web3 from "web3";
import Game from "../build/contracts/Game.json";

async function init() {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = Game.networks[networkId];
    const gameContract = new web3.eth.Contract(
        Game.abi,
        deployedNetwork && deployedNetwork.address
    );

    // Mint a card
    const accounts = await web3.eth.getAccounts();
    const instance = await Game.deployed();
    await gameContract.methods.mint("https://example.com/token/1").send({ from: accounts[0] });
    console.log("NFT Minted!");
}

window.addEventListener("load", init);
