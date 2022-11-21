const {DIRECTION} = require("./util/Constant");

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for(let i=1; i<=size; i++){
      const number = generateRandomNumber();
      number === 0? bridge.push(DIRECTION.UP):bridge.push(DIRECTION.DOWN);
    }
    
    return [...bridge];
  },
};


module.exports = BridgeMaker;
