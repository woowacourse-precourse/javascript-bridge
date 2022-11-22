const BridgeError = require("../BridgeError");
const {MESSAGE, BRIDGE} = require("../constants/CONSTANT");

const InputValidator = {
  bridgeSize(size) {
    if (this.checkNumber(size)) {
      return BridgeError.size(size);
    };
    return true;
  },

  bridgeMove(moveInput) {
    if (this.checkMoveInput(moveInput)){
      return BridgeError.move(moveInput);
    }
    return true;
  },

  bridgeCommand(command) {
    if (this.checkCommand(command)){
      return BridgeError.command(command);
    }
    return true;
  },

  checkNumber(number) {
    const isNumber = new RegExp("[^0-9]", "g");
    if (isNumber.test(number)) return true;
    if (Number(number) < BRIDGE.LENGTH.MIN || Number(number) > BRIDGE.LENGTH.MAX) return true;
    return false;
  },

  checkMoveInput(moveInput) {
    if (moveInput.length !== 1) return true;
    const isMoveInput = new RegExp("U|D", "g")
    if (!isMoveInput.test(moveInput)) return true;
    return false
  },

  checkCommand(command) {
    if (command.length !== 1) return true;
    const isCommand = new RegExp("Q|R", "g")
    if (!isCommand.test(command)) return true;
    return false
  }
}

module.exports = InputValidator;