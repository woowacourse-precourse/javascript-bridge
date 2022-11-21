const BridgeMaker = {
  makeBridge(size, generateRandomNumber) {
    return Array(size)
      .fill()
      .map(() => {
        const number = generateRandomNumber();
        return number === 1 ? "U" : "D";
      });
  },
};

module.exports = BridgeMaker;
