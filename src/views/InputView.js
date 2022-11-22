const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const Validator = require('../utils/Validator');
const { BRIDGE_STRING, GAME_COMMAND_STRING } = require('../utils/constants');

const InputView = {
  INPUT_MESSAGE: {
    bridgeSize: '\n다리의 길이를 입력해주세요.\n',
    moving: `\n이동할 칸을 선택해주세요. (위: ${BRIDGE_STRING.up}, 아래: ${BRIDGE_STRING.down})\n`,
    gameCommand: `\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${GAME_COMMAND_STRING.retry}, 종료: ${GAME_COMMAND_STRING.quit})\n`,
  },

  readBridgeSize(handleInput) {
    Console.readLine(InputView.INPUT_MESSAGE.bridgeSize, handleInput);
  },

  readMoving(handleInput) {
    Console.readLine(InputView.INPUT_MESSAGE.moving, handleInput);
  },

  readGameCommand(handleInput) {
    Console.readLine(InputView.INPUT_MESSAGE.gameCommand, handleInput);
  },
};

module.exports = InputView;
