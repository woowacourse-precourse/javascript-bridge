const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(null).map(() => {
      let correctWay = "U";

      const number = generateRandomNumber();
      if(Number(number) === 0) correctWay = 'D';
      return correctWay;
    });
  },
};

module.exports = BridgeMaker;