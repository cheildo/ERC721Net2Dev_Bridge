/*  
███╗░░██╗███████╗████████╗██████╗░██████╗░███████╗██╗░░░██╗
████╗░██║██╔════╝╚══██╔══╝╚════██╗██╔══██╗██╔════╝██║░░░██║
██╔██╗██║█████╗░░░░░██║░░░░░███╔═╝██║░░██║█████╗░░╚██╗░██╔╝
██║╚████║██╔══╝░░░░░██║░░░██╔══╝░░██║░░██║██╔══╝░░░╚████╔╝░
██║░╚███║███████╗░░░██║░░░███████╗██████╔╝███████╗░░╚██╔╝░░
╚═╝░░╚══╝╚══════╝░░░╚═╝░░░╚══════╝╚═════╝░╚══════╝░░░╚═╝░░░
                                                              
Update values accordingly
*/

/*
Private Key Encryption
Replace ethraw with your private key "0xPRIVATEKEY" (Ethereum and other EVM)
Replace hhraw with your private key "0xPRIVATEKEY" (Hardhat)
*/

import SimpleCrypto from "simple-crypto-js"
const cipherKey = "#ffg3$dvcv4rtkljjkh38dfkhhjgt"
const ethraw = "1638f4a3360e9b7453e7dca7fa0d7126ae0044b5aa4a915e40b804c0baa4b0c1";
export const simpleCrypto = new SimpleCrypto(cipherKey)
export const cipherEth = simpleCrypto.encrypt(ethraw)
/*
Add the wallet address used to deploy the contracts below:
*/
export var bridgeWallet = "0xB038f80c7f8B290F1b5642CFDB5599D568f9A0A9";

/*
Global Configurations
*/

/*
Polygon Mumbai Testnet
*/
export var mumErc20 = "0x0401717a8BE9382666854C49363ab76E93EEC341";
export var mumCustody = "0xd2B1a9039d38D90996BF6474db77d546d8C5d402";
export var mumNFT = "0xa6bb38E3045261D8BB4B73C15aad332a46AcEDf8";
export var mumrpc = "https://matic-mumbai.chainstacklabs.com";

/*
Ethereum Goerli Testnet
*/
export var goeErc20 = "";
export var goeCustody = "";
export var goeNFT = "";
export var goerpc = "https://rpc.ankr.com/eth_goerli";

/*
BSC Testnet
*/
export var bsctErc20 = "0x9ab834C78a00109f9c2e2be7C94AB70ae7f940B9";
export var bsctCustody = "";
export var bsctNFT = "0x2eF59F517E2576302418CD877177aFe192A09477";
export var bsctrpc = "https://data-seed-prebsc-1-s1.binance.org:8545/";

/*
Ethereum Mainnet
*/
export var ethrpc = "https://rpc.ankr.com/eth";

/*
BSC Mainnet
*/

export var bscrpc = "https://bsc-dataseed.binance.org";
