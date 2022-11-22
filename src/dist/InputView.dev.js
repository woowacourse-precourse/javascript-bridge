"use strict";

var _require = require('@woowacourse/mission-utils'),
    Console = _require.Console;

var _require2 = require('./BridgeMaker'),
    makeBridge = _require2.makeBridge;

var _require3 = require('./BridgeRandomNumberGenerator'),
    generate = _require3.generate;
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */


var InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize: function readBridgeSize(info) {
    var _this = this;

    Console.readLine('다리 길이를 입력해주세요.\n', function (line) {
      if (isNaN(line) || Number(line) < 3 || Number(line > 20)) throw new Error('[Error] 다리 길이 입력 값이 잘못 되었습니다.');
      info.bridgeLength = Number(line);
      info.bridgeInfo = makeBridge(info.bridgeLength, generate);

      _this.readMoving(info);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving: function readMoving(info) {
    Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래 : D)\n', function (input) {
      if (input !== 'D' && input !== 'U') throw new Error('[Error] 입력 값이 잘못 되었습니다.');
      if (info.bridgeGameManager.move(info, input)) console.log('맞음');else console.log('틀림');
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand: function readGameCommand() {}
};
module.exports = InputView;