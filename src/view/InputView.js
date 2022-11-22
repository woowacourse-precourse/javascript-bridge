const {Console} = require("@woowacourse/mission-utils");
const { Message } = require("./ViewMakers");
const Validation = require("./InputValidation");

const InputView = {

  readBridgeSize(app) {
    Console.readLine(Message.BRIDGE_SIZE, (size)=>{ 
      Console.print("");
      try{
        Validation.checkBridgeSize(size);
        app.init(size);
      }catch(err){
        Console.print(err.message);
        this.readBridgeSize(app);
      }
    });
  },

  readMoving(bridgePlay) {
    Console.readLine(Message.MOVE_TO_WHERE, (moving)=>{
      try{
        Validation.checkMoving(moving);
        bridgePlay.playRound(moving);
      }catch(err){
        Console.print(err.message);
        this.readMoving(bridgePlay);
      }
    });
  },

  readGameCommand(bridgePlay) {
    Console.readLine(Message.GAME_QUIT_OR_RETRY, (option)=>{
      try{
        Validation.checkOption(option);
        bridgePlay.endOrRetry(option);
      }catch(err){
        Console.print(err.message);
        this.readGameCommand(bridgePlay);
      }
    });
  }

};

module.exports = InputView;
