const Voting = artifacts.require("/Election.sol");

module.exports = function(deployer) {
  deployer.deploy(Voting);
};
