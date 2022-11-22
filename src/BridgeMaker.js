const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return new Array(size).fill(nul).map(() => {
      const number = generateRandomNumber();

      let direction = "D";
      if(Number(number) === 1) direction = 'U';
      return direction;
    });
  },
};

module.exports = BridgeMaker;
