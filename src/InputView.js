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
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    try{
      Console.readLine('다리의 길이를 입력해주세요.', (bridgeLen) => {
        console.log(`다리 길이 : ${bridgeLen}`);
        if(!(3<=bridgeLen && bridgeLen<=20)) throw "[ERROR] 다리 길이는 3~20 사이의 숫자만 입력 가능합니다.";
        if(isNaN(bridgeLen)) throw "[ERROR] 숫자만 입력하세요.";
        const bridge = BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate);
        currentBridge = this.readMoving([[],[]], bridge, 1);
        // 이동 후, 게임 진행 가능한지 확인
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
    console.log('입력받는다!');
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (input) => {
      console.log(`이동할 칸 : ${input}`);
      currentBridge=game.move(currentBridge, bridge, input); // class
      this.stillMoving(currentBridge, bridge, count);
    })
    return currentBridge;
  },

  /**
   * 게임 진행이 가능한지, 게임이 종료되었는지, 게임을 진행할 수 없는지 확인
   */
  stillMoving(currentBridge, bridge, count) {
    // 게임 종료되었는지 확인
    console.log(currentBridge[0].length, bridge.length);
    console.log(`count: ${count}`);
    if(currentBridge[0].length === bridge.length) {
      // 게임 종료 -> 출력
      OutputView.printResult(currentBridge, count, 1);
      console.log('게임 종료');
    }

    // 틀렸는지 확인
    else if(currentBridge[0].includes('X') || currentBridge[1].includes('X')){
      // 게임 틀림 -> 게임 종료할지, 재시작 할 지 결정
      console.log('틀림. 재시작? 종료?');
      OutputView.printMap(currentBridge);
      this.readGameCommand(currentBridge, bridge, count);
    }

    // 게임 진행가능한지 확인
    else {
      // 게임 다시 진행
      console.log('겜 진행');
      this.readMoving(currentBridge, bridge, count);
      OutputView.printMap(currentBridge);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(currentBridge, bridge, count) {
    Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (input) => {
      console.log(`재시작 여부 : ${input}, count: ${count}`);
      if(input==='R') {
        count += 1;
        console.log('재시작 O');
        this.readMoving(game.retry(currentBridge), bridge, count);
      }
      else if(input==='Q') {
        console.log('재시작 X');
        OutputView.printResult(currentBridge, count, 0);
      }
    })
  },
};

module.exports = InputView;
