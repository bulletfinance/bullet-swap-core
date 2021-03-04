var Factory = artifacts.require("BulletFactory.sol");

module.exports = function(deployer) {
  // deployment steps
  const feeSetter = '0xC66C4f10e5F64F87D1CBe1ddAEb92b15424A378E'
  deployer.deploy(Factory, feeSetter);  
};
