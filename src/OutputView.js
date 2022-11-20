const { Console } = require("@woowacourse/mission-utils");
const { MESSAGE_PROCESS } = require('./Constants');

const OutputView = {
  printError(error) {
    Console.print(error);
  },

  printStart() {
    Console.print(MESSAGE_PROCESS.GAME_START);
  },

  printMap(movings) {
    const moveUp = movings.moveUp;
    const moveDown = movings.moveDown;
    
    Console.print(`[ ${moveUp.join(' | ')} ]`);
    Console.print(`[ ${moveDown.join(' | ')} ]`);
  },

  printResult(gameResult) {
    Console.print(MESSAGE_PROCESS.GAME_QUIT);
    Console.print(`[ ${gameResult.moveUp.join(' | ')} ]`);
    Console.print(`[ ${gameResult.moveDown.join(' | ')} ]`);
    Console.print(`\n게임 성공 여부: ${gameResult.isSuccess? '성공': '실패'}`);
    Console.print(`총 시도한 횟수: ${gameResult.tryCount}`);
    Console.close();
  },
};

module.exports = OutputView;
