const {Console} = require("@woowacourse/mission-utils");

const OutputView = {

   setMap(game) {
    const map = Array.from({ length: 2 }, () => Array(game.state.length).fill(' '));
    game.state.forEach((isEqual, idx) => {
      const bridgePos = game.bridge[idx] === 'U' ? 0 : 1;
      if (isEqual === true){
        map[bridgePos][idx] = 'O';
        return;
      }
      map[1 - bridgePos][idx] = 'X';
    });
    return map;
  },

  printMap(game) {
    let mapResult = this.setMap(game);

    mapResult.map((row) => {
      Console.print(`[ ${row.join(' | ')} ]`);
    });

  },
  
  printResult(game) {
    const isSuccess = game.state.every((isSuccess) => isSuccess);
    const result = isSuccess ? '게임 성공 여부: 성공' : '게임 성공 여부: 실패';
    let tryCount = game.tryCount += 1;

    Console.print('최종 게임 결과');
    this.printMap(game);
    Console.print(result);
    Console.print(`총 시도한 횟수: ${tryCount}`);
    Console.close();

  },
};

module.exports = OutputView;
