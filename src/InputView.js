const {Console} = require("@woowacourse/mission-utils");
const Messages = require("./Messages");
const Validation = require("./Validation");

const InputView = {
  readBridgeSize(app) {
    Console.readLine(Messages.input_size(), (size)=>{
      try{
        Validation.checkBridgeSize(size);
        app.init(size);
      }catch(err){
        Console.print(err.message);
        this.readBridgeSize(app);
      }
    })
  },

  readMoving(bridgePlay) {
    Console.readLine(Messages.input_moving(), (moving)=>{
      try{
        Validation.checkMoving(moving);
        bridgePlay.playRound(moving);
      }catch(err){
        Console.print(err.message);
        this.readMoving(bridgePlay);
      }
    })
  },

  readGameCommand(bridgePlay) {
    Console.readLine(Messages.input_command(), (option)=>{
      try{
        Validation.checkOption(option);
        bridgePlay.endOrRetry(option);
      }catch(err){
        Console.print(err.message);
        this.readGameCommand(bridgePlay);
      }
    })
  },
};

module.exports = InputView;
