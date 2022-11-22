const { GAME_MESSAGES } = require("./Constants");
const InputView = {
  size: "",
  gameClient: "",

  insertSize(size) {
    this.size = Number(size);
    this.gameClient = new BridgeGame(this.size);
    this.readMoving();
  },

  readBridgeSize() {
    Console.readLine(GAME_MESSAGES.ASK_TO_BRIDGE_LENGTH, (size) => {
      try {
        this.sizeValidate(size);
        this.insertSize(size);
      } catch (error) {
        this.printInputSizeError(error);
      }
    });
  },

};

module.exports = InputView;
