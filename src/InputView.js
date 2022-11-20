const MissionUtils = require("@woowacourse/mission-utils");
const MESSAGE=require('../src/constant');
const InputView = {
  readBridgeSize() {
    MissionUtils.Console.readLine(MESSAGE.BRIDGE_SIZE,(bridgeLength)=>{

    })
  },
  readMoving() {
    MissionUtils.Console.readLine(MESSAGE.MOVE_MESSAGE,(move)=>{
      
    })
  },
  readGameCommand() {
    MissionUtils.Console.readLine(MESSAGE.RESTAR_MESSAGE,(restart)=>{
      
    })
  },
};

module.exports = InputView;
