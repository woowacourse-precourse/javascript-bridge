const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const MU = require("@woowacourse/mission-utils");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   * @param {string[]} bridge 만들어진 다리. 재시작시 재사용
   */
  readBridgeSize() {
    MU.Console.readLine('다리의 길이를 입력해주세요.\n', (bridgeLen) => {
      let bridge = BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate);
      this.readMoving([], bridge, 1);
    })
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   * @param {string[]} currentLocation 현재까지 이동한 다리
   * 길이 0 실패 혹은 처음 호출
   * @param {number} count 총 시도 횟수
   */
  readMoving(currentLocation, bridge, count) {
    MU.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (nextStep) => {
      currentLocation = BridgeGame.move(currentLocation, nextStep, bridge); 
      if(currentLocation.length === 0) this.readGameCommand(bridge,count);
      if(currentLocation.length === bridge.length) {
        최종게임결과 프린트 호출
        MU.Console.close();
      }
      else this.readMoving(currentLocation, bridge, count); 
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridge, count) {
    MU.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (restart) => {
      if(restart === 'R') this.readMoving([], bridge, count + 1);
      if(restart === 'Q') {
        최종게임결과 프린트 호출
        return MU.Console.close();
      }
    })
  },
};

module.exports = InputView;
