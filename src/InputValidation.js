const { ERROR_MESSAGE, GAME_BUTTON } = require('./Constants');

const InputVaildation = {
  ofBridgeLength(length) {
    const regExag = /(^[3-9]{1}$|^[1]{1}[0-9]{1}$|^20$)/gm;
    if (!regExag.test(length)) {
      throw new Error(ERROR_MESSAGE.invalidRangeInput);
    }
  },

  ofMove(direction) {
    if (direction !== GAME_BUTTON.moveUp && direction !== GAME_BUTTON.moveDown) {
      throw new Error(ERROR_MESSAGE.invalidMoveInput);
    }
  },

  ofRetryOrQuit(command) {
    if (command !== GAME_BUTTON.restart && command !== GAME_BUTTON.end) {
      throw new Error(ERROR_MESSAGE.invalidCommandInput);
    }
  },
};

module.exports = InputVaildation;
