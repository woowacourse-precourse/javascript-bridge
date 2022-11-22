const { Console } = require('@woowacourse/mission-utils');
const { MOVE_TYPE, COMMAND_MATCH_INDEX } = require('../constants/Settings');
const { attempts } = require('../constants/Result');

const MESSAGES = require('../constants/Messages');
const RESULT = require('../constants/Result');

const OutputView = {
  printStartMessage() {
    Console.print(MESSAGES.start);
  },
  printError(error) {
    Console.print(error.message);
  },
  makeGameMap(moves) {
    return moves.reduce(
      (acc, [result, command]) => {
        let row = COMMAND_MATCH_INDEX[command];
        acc[row].push(MOVE_TYPE[result]);
        acc[(row + 1) % 2].push(' ');

        return acc;
      },
      [[], []]
    );
  },
  printMap(moves) {
    const gameMap = this.makeGameMap(moves);

    Console.print(`${gameMap.map((row) => `[ ${row.join(' | ')} ]`).join('\n')}\n`);
  },
  printResult(isSuccess, attempts, moves) {
    let result = isSuccess ? '성공' : '실패';

    Console.print(`${RESULT.title}`);
    this.printMap(moves);
    Console.print(`${RESULT.successOrFailure(result)}\n${RESULT.attempts(attempts)}`);
  },
  close() {
    Console.close();
  },
};

module.exports = OutputView;
