const { Console } = require('@woowacourse/mission-utils');
const { printError } = require('./OutputView');
const { bridgeSizeValidate, moveValidate, commandValidate } = require('./Validate');

const InputView = {
  readBridgeSize(next) {
    // return new Promise((resolve, reject) => {
    //   Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
    //     try {
    //       bridgeSizeValidate(size);
    //     } catch (e) {
    //       reject(e);
    //     }
    //     resolve(size);
    //   });
    // });
    Console.readLine('\n다리의 길이를 입력해주세요.\n', (size) => {
      try {
        bridgeSizeValidate(size);
      } catch (e) {
        printError(e);
        InputView.readBridgeSize(next);
        return;
      }
      next(size);
    });
  },

  readMoving(next) {
    // return new Promise((resolve, reject) => {
    //   Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (move) => {
    //     try {
    //       moveValidate(move);
    //     } catch (e) {
    //       reject(e);
    //     }
    //     resolve(move);
    //   });
    // });
    Console.readLine('\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n', (move) => {
      try {
        moveValidate(move);
      } catch (e) {
        printError(e);
        InputView.readMoving(next);
        return;
      }
      next(move);
    });
  },

  readGameCommand(next) {
    // return new Promise((resolve) => {
    //   Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (command) => {
    //     resolve(command);
    //   });
    // });

    Console.readLine('\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n', (command) => {
      try {
        commandValidate(command);
      } catch (e) {
        printError(e);
        InputView.readGameCommand(next);
        return;
      }
      next(command);
    });
  },
};

module.exports = InputView;
