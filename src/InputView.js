const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeMaker = require('./BridgeMaker')
const BridgeGame = require('./BridgeGame')
const Validate = require('./Validate');
const OutputView = require("./OutputView");
const Constants = require('./Constants')


const InputView = {

  readBridgeSize() {
    Console.readLine('다리 길이를 입력해 주세요', (size)=>{
      if(Validate.validateSize(size)){return this.readBridgeSize()}
      const generateRandomNumber = BridgeRandomNumberGenerator.generate
      const BRIDGE = BridgeMaker.makeBridge(size, generateRandomNumber)
      this.readMoving(BRIDGE, Constants.STARTBRIDGE, 0, Constants.TRIALS)
    })
  },

  readMoving(BRIDGE, CURRENTBRIDGE, CURRENTLOCATION, TRIALS) {
    if(BRIDGE.length == CURRENTLOCATION){return OutputView.printResult(CURRENTBRIDGE, CURRENTLOCATION, TRIALS)}
    Console.readLine('이동할 칸을 입력해주세요. (위: U, 아래: D)', (moveinput)=>{
      if(Validate.validateMoveInput(moveinput)){return this.readMoving(BRIDGE, CURRENTBRIDGE, CURRENTLOCATION, TRIALS)}
      const CHECK = BridgeGame.move(BRIDGE, CURRENTLOCATION, moveinput)
      const NEXTBRIDGE = OutputView.printMap(CURRENTBRIDGE, CHECK, moveinput)
      OutputView.printCurrentBridge(NEXTBRIDGE)
      if (CHECK == Constants.SUCCESS) {return this.readMoving(BRIDGE, NEXTBRIDGE, CURRENTLOCATION+1, TRIALS)} 
      return this.readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION, TRIALS)
    })
  },

  readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION,TRIALS) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (retryInput)=>{
      if(Validate.validateRetryinput(retryInput)){return this.readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION,TRIALS)}
      const RETRYCHECK = BridgeGame.retry(retryInput)
      if (RETRYCHECK == 0) {return this.readMoving(BRIDGE, Constants.STARTBRIDGE, 0, TRIALS+1)}
      OutputView.printResult(NEXTBRIDGE, CURRENTLOCATION, TRIALS)
    })

  },
};

module.exports = InputView;
