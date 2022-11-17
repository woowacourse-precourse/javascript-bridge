const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array.from({ length: size }, () => {
      const randomNum = generateRandomNumber();

      if (randomNum === 0) {
        return 'D';
      }

      return 'U';
    });
  },
};

module.exports = BridgeMaker;
