const HEADER = '[ERROR] ';

const ERROR = {
  BRIDGE_SIZE: (maximum, minimum) =>
    `${HEADER}다리 길이는 ${minimum}부터 ${maximum} 사이의 숫자여야 합니다.`,
  NOT_NUMBER: `${HEADER} 숫자를 입력해야 합니다.`,
  NOT_AVAILABLE_MOVE: (availableMoves) =>
    `${HEADER} 이동하기 위해서는 ${availableMoves
      .reduce((allMoves, move) => allMoves + `, ${move}`, '')
      .slice(2)}만 입력 가능합니다`,
};

module.exports = ERROR;
