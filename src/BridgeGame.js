class BridgeGame {
  #bridge

  constructor(bridge) {
    this.#bridge = bridge;
  };
  
  move(userUpDown) {
    let lastUpDownIndex = userUpDown.length - 1;
    if (this.#bridge[lastUpDownIndex] === userUpDown[lastUpDownIndex]) {
      return this.moveLengthCheck(userUpDown.length);
    };

    return 0;
  };

  moveLengthCheck(userMoveLength) {
    if (userMoveLength === this.#bridge.length) {
      return 2;
    };

    return 1;
  };
  
  retry(command) {
    if (command === 'R') {
      return 1;
    };

    return 0;
  };
};

module.exports = BridgeGame;
