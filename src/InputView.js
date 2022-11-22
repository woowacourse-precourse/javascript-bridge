const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const game = new BridgeGame();
const InputView = {
  bridgeLenError(bridgeLen){
    if(!(3<=bridgeLen && bridgeLen<=20)) throw "[ERROR] 다리 길이는 3~20 사이의 숫자만 입력 가능합니다.";
    if(isNaN(bridgeLen)) throw "[ERROR] 숫자만 입력하세요.";
  },
  readMovingError(input){
    if(input!=="U" && input!=="D") throw "[ERROR] U와 D중 하나만 입력 가능합니다.";
  },

  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try{
      Console.readLine('다리의 길이를 입력해주세요.', (bridgeLen) => {
        this.bridgeLenError(bridgeLen);
        const bridge = BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate);
        currentBridge = this.readMoving([[],[]], bridge, 1);
      })
    } catch(e){
      Console.print(e);
      this.readBridgeSize();
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(currentBridge, bridge, count) {
    try{
      Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
        this.readMovingError(input);
        currentBridge=game.move(currentBridge, bridge, input);
        this.stillMoving(currentBridge, bridge, count);
      })
    } catch(e){
      Console.print(e);
      this.readMoving(currentBridge, bridge, count);
    }
  },

  /**
   * 게임 진행이 가능한지, 게임이 종료되었는지, 게임을 진행할 수 없는지 확인
   */
  stillMoving(currentBridge, bridge, count) {
    if(currentBridge[0].length === bridge.length) OutputView.printResult(currentBridge, count, 1);
    else if(currentBridge[0].includes('X') || currentBridge[1].includes('X')){
      OutputView.printMap(currentBridge);
      this.readGameCommand(currentBridge, bridge, count);
    }
    else {
      this.readMoving(currentBridge, bridge, count);
      OutputView.printMap(currentBridge);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(currentBridge, bridge, count) {
    try{
      Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (input) => {
        if(input==='R') this.readMoving(game.retry(currentBridge), bridge, ++count);
        else if(input==='Q') OutputView.printResult(currentBridge, count, 0);
        else throw "[ERROR] R와 Q중 하나만 입력 가능합니다.";
      })
    } catch(e) {
      Console.print(e);
      this.readGameCommand(currentBridge, bridge, count);
    }
  },
};

module.exports = InputView;
