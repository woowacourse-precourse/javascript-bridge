const { Console } = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator')
const BridgeMaker = require('./BridgeMaker')
const BridgeGame = require('./BridgeGame')
const Validate = require('./Validate');
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    Console.readLine('다리 길이를 입력해 주세요', (size)=>{
      if(Validate.validateSize(size)){return this.readBridgeSize()}
      const generateRandomNumber = BridgeRandomNumberGenerator.generate
      const BRIDGE = BridgeMaker.makeBridge(size, generateRandomNumber)
      const TRIALS = 1
      const STARTBRIDGE = [[],[]]
      this.readMoving(BRIDGE, STARTBRIDGE, 0, TRIALS)
    })
  },
  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(BRIDGE, CURRENTBRIDGE, CURRENTLOCATION, TRIALS) {
    if(BRIDGE.length == CURRENTLOCATION){return OutputView.printResult(CURRENTBRIDGE, CURRENTLOCATION, TRIALS)}
    const SUCCESS = ' O '
    Console.readLine('이동할 칸을 입력해주세요. (위: U, 아래: D)', (moveinput)=>{
      if(Validate.validateMoveInput(moveinput)){return this.readMoving(BRIDGE, CURRENTBRIDGE, CURRENTLOCATION, TRIALS)}
      const CHECK = BridgeGame.move(BRIDGE, CURRENTLOCATION, moveinput)
      const NEXTBRIDGE = OutputView.printMap(CURRENTBRIDGE, CHECK, moveinput)
      OutputView.printCurrentBridge(NEXTBRIDGE)
      if (CHECK == SUCCESS) {
        this.readMoving(BRIDGE, NEXTBRIDGE, CURRENTLOCATION+1, TRIALS)
      } 
      else {this.readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION, TRIALS)}
    })
  },
  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION,TRIALS) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요.', (retryInput)=>{
      if(Validate.validateRetryinput(retryInput)){return this.readGameCommand(BRIDGE, NEXTBRIDGE, CURRENTLOCATION,TRIALS)}
      const RETRYCHECK = BridgeGame.retry(retryInput)
      if (RETRYCHECK == 0) {return this.readMoving(BRIDGE, [[],[]], 0, TRIALS+1)}
      OutputView.printResult(NEXTBRIDGE, CURRENTLOCATION, TRIALS)
    })

  },
};

module.exports = InputView;
