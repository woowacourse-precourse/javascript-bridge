const { Console } = require('@woowacourse/mission-utils');
const InputVaildation = require('./InputValidation');
const OutputView = require('./OutputView');

const InputView = {
  readBridgeSize(callback) {
    Console.readLine('다리의 길이를 입력해주세요.\n', length => {
      try {
        InputVaildation.ofBridgeLength(length);
        callback.call(this, length);
      } catch {
        OutputView.printWrongInputOfBridgeLength();
        this.requestBridgeLength();
      }
    });
  },

  readMoving(callback) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', upOrDown => {
      try {
        InputVaildation.ofMove(upOrDown);
        callback.call(this, upOrDown);
      } catch {
        OutputView.printWrongInputOfMoving();
        this.requestMove();
      }
    });
  },

  readRetryOrQuit(callback) {
    Console.readLine(
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
      userChoice => {
        try {
          InputVaildation.ofRetryOrQuit(userChoice);
          callback.call(this, userChoice);
        } catch {
          OutputView.printWrongInputOfRetryOrQuit();
          this.requestContinue();
        }
      }
    );
  },
};

module.exports = InputView;
