const BridgeGame = require('./BridgeGame');
const BridgeMaker = require('./BridgeMaker');
const { generate } = require('./BridgeRandomNumberGenerator');
const { readMoving, readGameCommand } = require('./InputView');
const { printMap, printResult } = require('./OutputView');

const GameController = {
  initBridge(size) {
    const bridge = BridgeMaker.makeBridge(size, generate);
    console.log(bridge);
    const game = new BridgeGame(bridge);
    return game;
  },

  selectSpace(game, direction) {
    game.move(direction); // records에 넣음 (Move)
    printMap(game); // printMap
  },

  moveProcess(game, direction) {
    if (BridgeGame.canMoveNext(direction, game.getNextDirection())) {
      // 다음 칸으로 움직일 수 있으면 다리 끝에 도달했는지 확인하고 아니라면 다음 칸으로 움직이기.
      // 만약 다리 끝에 도달했다면 최종 게임 결과 출력하기
      // 만약 다음 칸으로 움직일 수 없다면 재시작 커맨드 입력받기

      if (game.isEndOfBridge()) printResult(game);
      else readMoving(game);
    } else readGameCommand(game);
  },
};

module.exports = GameController;
