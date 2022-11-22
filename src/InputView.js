const MissionUtils = require("@woowacourse/mission-utils");
const Validator = require("./Validator");

const InputView = {
  readBridgeSize() {
    let bridgeSize = 0;
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.\n', (answer) => {
      Validator.isBridgeSize(answer);
      bridgeSize = answer;
    });
    return bridgeSize;
  },

  readMoving() {
    let move = '';
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (answer) => {
      Validator.isMove(answer);
      move = answer;
    });
    return move;
  },

  readGameCommand() {
    let gameCommand = '';
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (answer) => {
      Validator.isGameCommand(answer);
      gameCommand = answer;
    });
    return gameCommand;
  }
};

module.exports = InputView;
