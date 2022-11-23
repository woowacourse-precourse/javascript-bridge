const { printAllInList } = require('../utils/util');

const HEADER = '[ERROR] ';

const ERROR = {
  BRIDGE_SIZE: (maximum, minimum) =>
    `${HEADER}다리 길이는 ${minimum}부터 ${maximum} 사이의 숫자여야 합니다.`,
  NOT_NUMBER: `${HEADER} 숫자를 입력해야 합니다.`,
  NOT_AVAILABLE_MOVE: (availableMoves) =>
    `${HEADER}이동하기 위해서는 ${printAllInList(availableMoves)}만 입력 가능합니다.`,
  NOT_AVAILABLE_PLAY: (availablePlay) =>
    `${HEADER}게임을 다시하거나 종료하기 위해서 ${printAllInList(availablePlay)}만 입력 가능합니다`,
};

module.exports = ERROR;
