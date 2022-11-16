const BridgeMaker = {
  /**
   * @param {number} size
   * @param {function(): number} generateRandomNumber
   * @return {string[]}
   */
  makeBridge(size, generateRandomNumber) {
    const bridge = [];
    [...Array(size)].forEach(() => {
      const block = generateRandomNumber.generate() === 0 ? "D" : "U";
      bridge.push(block);
    });
    return bridge;
  },
};

module.exports = BridgeMaker;
