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
      outputView.printMap(input,moveResult)
      this.readMoving()
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
