const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE } = require("../constants/Constants");
const Validation = require("./InputValidation");

const InputView = {

  readBridgeSize(app) {
    Console.readLine(MESSAGE.BRIDGE_SIZE, (size)=>{ 
      Console.print("");
      if(Validation.validateBridgeSize(size)){
        app.init(size);
        return;
      }
      this.readBridgeSize(app);
    });
  },

  readMoving(bridgePlay) {
    Console.readLine(MESSAGE.MOVE_TO_WHERE, (moving)=>{
      if(Validation.validateMoving(moving)){
        bridgePlay.playRound(moving);
        return;
      }
      this.readMoving(bridgePlay);
    });
  },

  readGameCommand(bridgePlay) {
    Console.readLine(MESSAGE.GAME_QUIT_OR_RETRY, (option)=>{
      if(Validation.validateOption(option)){
        bridgePlay.endOrRetry(option);
        return;
      }
      this.readGameCommand(bridgePlay);
    });
  }

};

module.exports = InputView;
