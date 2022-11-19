/**
 * 사용자로부터 입력을 받는 역할을 한다.
 * InputView 에서만 MissionUtils의 Console.readLine() 을 이용해 사용자의 입력을 받을 수 있다
제공된 InputView 객체를 활용해 구현해야 한다.
InputView의 파일 경로는 변경할 수 있다.
InputView의 메서드의 인자는 변경할 수 있다.
사용자 값 입력을 위해 필요한 메서드를 추가할 수 있다. 
*/
const MissionUtils = require('@woowacourse/mission-utils');
const outputFunction = require('../src/OutputView');
const BridgeGame = require('../src/BridgeGame');
const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const bridgeGame1 = new BridgeGame();
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  async readBridgeSize() {
    //const bridgeGame = new BridgeGame();
    await MissionUtils.Console.readLine(
      '다리의 길이를 입력해주세요.',
      (answer) => {
        const bridge = BridgeMaker.makeBridge(
          answer,
          BridgeRandomNumberGenerator.generate
        );
        bridgeGame1.bridgeMake(bridge);
        this.readMoving();
        // bridgeGame.bridgeMake(bridge);
        // bridge 요녀석을 어떻게 보내지
        //BridgeGame.bridgeMake(bridge); //요녀석을 어떻게 보내지?
        //여기서 바로 이동 문구 출력
      }
    );
    return '안녕';
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving() {
    MissionUtils.Console.readLine(
      '이동할 칸을 선택해주세요. (위: U, 아래: D)',
      (answer) => {
        //let move = inputFunction.readMoving(answer);
        const result = bridgeGame1.move(answer);
        console.log(result);
        outputFunction.printMap(bridgeGame1.bridegeUp, bridgeGame1.bridegeDown);
        if (!result) {
          console.log('실패, 다시할래?');
          return;
        }
        this.readMoving();
        //결과나오면 무조건 출력하고 성공시 스텝원 다시 반복 실패시 리트할꺼?
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
