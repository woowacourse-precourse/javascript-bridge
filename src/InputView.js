const {Console} = require("@woowacourse/mission-utils");
const { input_command } = require("./Messages");
const Messages = require("./Messages");
const Validation = require("./Validation");

const InputView = {
  readBridgeSize(app) {
    Console.readLine(Messages.input_size(), (size)=>{
      Validation.checkBridgeSize(size);
      app.init(size);
    })
  },

  readMoving(bridgePlay) {
    Console.readLine(Messages.input_moving(), (moving)=>{
      Validation.checkMoving(moving);
      bridgePlay.playRound(moving);
    })
  },

  readGameCommand(bridgePlay) {
    Console.readLine(input_command(), (option)=>{
      Validation.checkOption(option);
      bridgePlay.quitOrRetry(option);
    })
  },
};

module.exports = InputView;
