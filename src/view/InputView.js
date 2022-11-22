const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");
const Validation = require("./InputValidation");

const InputView = {

  readBridgeSize(app) {
    Console.readLine(Messages.BRIDGE_SIZE(), (size)=>{ 
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
    Console.readLine(Messages.MOVE_TO_WHERE(), (moving)=>{
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
    Console.readLine(Messages.GAME_QUIT_OR_RETRY(), (option)=>{
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
