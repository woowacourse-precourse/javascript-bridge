class BridgeGame {
  #bridge

  constructor(bridge) {
    this.#bridge = bridge;
  };
  
  move(userUpDown) {
    let userMoveLength = userUpDown.length;
    if (this.#bridge[userMoveLength - 1] === userUpDown[userMoveLength - 1]) {
      return this.moveLengthCheck(userMoveLength);
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
