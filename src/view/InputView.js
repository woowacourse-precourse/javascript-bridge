const { Console } = require("@woowacourse/mission-utils");
const { Message } = require("../constants/Constants");
const Validation = require("./InputValidation");

const InputView = {

  readBridgeSize(app) {
    Console.readLine(Message.BRIDGE_SIZE, (size)=>{ 
      Console.print("");
      if(Validation.validateBridgeSize(size)){
        app.init(size);
        return;
      }
      this.readBridgeSize(app);
    });
  },

  readMoving(bridgePlay) {
    Console.readLine(Message.MOVE_TO_WHERE, (moving)=>{
      if(Validation.validateMoving(moving)){
        bridgePlay.playRound(moving);
        return;
      }
      this.readMoving(bridgePlay);
    });
  },

  readGameCommand(bridgePlay) {
    Console.readLine(Message.GAME_QUIT_OR_RETRY, (option)=>{
      if(Validation.validateOption(option)){
        bridgePlay.endOrRetry(option);
        return;
      }
      this.readGameCommand(bridgePlay);
    });
  }

};

module.exports = InputView;
