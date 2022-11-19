const MissionUtils = require("@woowacourse/mission-utils");
const bridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator")
const bridgeMaker = require("./BridgeMaker")
const outputView = require("./OutputView")
const BridgeGame = require("./BridgeGame")
let bridgeGame = new BridgeGame();
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  bridge:[],
  bridgeLength:0,
  tryCount:1,
  moveCount:0,
  successGame:'성공',
  failGame:'실패',
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.',(input)=>{
      this.bridgeLength = Number(input);
      this.bridge = bridgeMaker.makeBridge(this.bridgeLength,bridgeRandomNumberGenerator.generate);
      this.readMoving()
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요.',(input)=>{
      let moveResult = bridgeGame.move(input,this.bridge);
      let bridgeMap = bridgeGame.drawMap(input,moveResult)
      outputView.printMap(bridgeMap)
      if(moveResult === 'X') this.readGameCommand()
      if(moveResult === 'O') this.moveCount++
      if(this.moveCount === this.bridgeLength) return outputView.printResult(this.tryCount,this.successGame)
      this.readMoving()
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요.(재시도 : R, 종료: Q)',(input)=>{
      if(input === 'R'){
        this.moveCount = 0;
        this.tryCount++;
        bridgeGame.retry()
        this.readMoving()
      }
      if(input === 'Q') return outputView.printResult(this.tryCount,this.failGame)
    })
  },
};
module.exports = InputView;
