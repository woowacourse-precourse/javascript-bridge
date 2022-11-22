const { generate } = require("./BridgeRandomNumberGenerator");

const BridgeMaker = {

  makeBridge(size, generateRandomNumber) {
    let bridge = [];
    for(let i = 0 ; i<size ; i++){
      if(generateRandomNumber() === '1'){
        bridge.push('U');
        continue;
      }
      bridge.push('D');
    }
    return bridge;  
  },

  generateRandomNumber() {
    return generate();
  } 
};

module.exports = BridgeMaker;
