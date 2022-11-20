

const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    for(let i=1; i<=size; i++){
      const number = generateRandomNumber();
      number.toString() === "0"? bridge.push("D") : bridge.push("U");
    }
    return [...bridge];
  },
};


module.exports = BridgeMaker;
