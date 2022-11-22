const MissionUtils = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize(callback, message = '') {
    OutputView.printMessage('다리의 길이를 입력해주세요.');
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  readMoving(callback, message = '') {
    OutputView.printMessage('이동할 칸을 선택해주세요. (위: U, 아래: D)');
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },

  readGameCommand(callback, message = '') {
    OutputView.printMessage(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)'
    );
    MissionUtils.Console.readLine(message, (answer) => {
      callback(answer);
    });
  },
};

module.exports = InputView;
