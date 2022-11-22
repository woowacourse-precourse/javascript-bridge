const MissionUtils = require("@woowacourse/mission-utils");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const InputView = require("./InputView");
const Console = MissionUtils.Console;
const Random = MissionUtils.Random;
/**
 * 다리의 길이를 입력 받아서 다리를 생성해주는 역할을 한다.
 */
const BridgeMaker = {
  /**
   * @param {number} size 다리의 길이
   * @param {function(): number} generateRandomNumber 무작위 값을 생성해주는 함수
   * @return {string[]} 입력받은 길이에 해당하는 다리 모양. 위 칸이면 U, 아래 칸이면 D로 표현해야 한다.
   */
  makeBridge(size, generateRandomNumber) {
    Console.readLine('다리의 길이를 입력해주세요.\n', (num) => {
      size = Number(num);
      if (size >= 3 && size <= 20) {
        let bridge = Array(parseInt(size));
        for (let i = 0; i < size; i++) {
          bridge[i] = BridgeRandomNumberGenerator.generate();
        }
        let count = 0;
        InputView.readBridgeSize(bridge, count);
      } else {
        throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
      }
    });
  },
};

module.exports = BridgeMaker;
