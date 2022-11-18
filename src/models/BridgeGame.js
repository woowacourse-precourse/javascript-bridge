class BridgeGame {
  #bridge

  constructor(bridge) {
    this.#bridge = bridge;
  };
  
  move(userUpDown) {
    let userLastUpDownIndex = userUpDown.length;
    if (this.#bridge[userLastUpDownIndex - 1] === userUpDown[userLastUpDownIndex - 1]) {
      return this.moveLengthCheck(userLastUpDownIndex);
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
