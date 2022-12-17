const MissionUtiles = require('@woowacourse/mission-utils');
const Validate = require('./Validate');
const ErrorHandler = require('./ErrorHandler');

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(makeBridge, errorcallback, callback) {
    MissionUtiles.Console.readLine('다리 길이를 입력', input => {
      const validTarget = () => Validate.bridgeSize(input);
      const doCallBack = () => makeBridge(input);
      ErrorHandler.watch(validTarget, errorcallback, doCallBack);
      
      console.log('111121');
      callback();
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(callback, errorCallBack) {
    MissionUtiles.Console.readLine('방향을 입력', way => {
      const validTarget = () => Validate.way(way);
      const nextStep = () => callback(way);
      ErrorHandler.watch(validTarget, errorCallBack, nextStep);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {},
};

module.exports = InputView;
