const BridgeMakerController = {
  getSize(number) {
    this.size = number;
    this.getRandomNumber();
  },
};

module.exports = BridgeMakerController;
