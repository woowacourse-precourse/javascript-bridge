const BridgeError = require("../BridgeError");
const { BRIDGE } = require("../constants/CONSTANT");

const InputValidator = {
  bridgeSize(size) {
    return this.checkNumber(size) ? BridgeError.size(size) : true;
  },

  bridgeMove(moveInput) {
    return this.checkMoveInput(moveInput) ? BridgeError.move(moveInput) : true;
  },

  bridgeCommand(command) {
    return this.checkCommand(command) ? BridgeError.command(command) : true;
  },

  checkNumber(number) {
    const isNumber = new RegExp("[0-9]", "g");
    const isLength = Number(number) < BRIDGE.LENGTH.MIN || Number(number) > BRIDGE.LENGTH.MAX;
    return !isNumber.test(number) || isLength;
  },

  checkMoveInput(moveInput) {
    const isMoveInput = new RegExp("U|D", "g");
    return !isMoveInput.test(moveInput) || moveInput.length !== 1;
  },

  checkCommand(command) {
    const isCommand = new RegExp("Q|R", "g");
    return !isCommand.test(command) || command.length !== 1;
  },
};

module.exports = InputValidator;
