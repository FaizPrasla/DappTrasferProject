const EthSwap = artifacts.require("EthSwap");
const Token = artifacts.require("Token");
const PriceConsumerV3 = artifacts.require("PriceConsumerV3");

module.exports = async function(deployer) {
  await deployer.deploy(Token);
  const token = await Token.deployed();
  await deployer.deploy(EthSwap, token.address);
  const ethSwap = await EthSwap.deployed();
  await deployer.deploy(PriceConsumerV3);
  const price = await Token.deployed();
  //transfer all token to eth_swap
  await token.transfer(ethSwap.address, '1000000000000000000000000')
};
