const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.LENGTH, (answer) => {
      Validation.bridgeSize(answer);

      const size = Number(answer);
      const bridge = makeBridge(size, generate);
      const game = new BridgeGame(bridge);

      Console.print('');
      InputView.readMoving(game);
    });
  },
  readMoving(game) {
    Console.readLine(GAME_MESSAGE.MOVING, (answer) => {
      Validation.moving(answer);

      const move = game.move(answer);

      if (move === false) {
        InputView.readGameCommand(game);
        return;
      }

      if (game.isEnd === false) {
        InputView.readMoving(game);
        return;
      }

      game.end(game);
    });
  },
  readGameCommand(game) {
    Console.readLine(GAME_MESSAGE.RESTART, (answer) => {
      Validation.gameCommand(answer);

      if (answer === 'R') {
        game.retry(game);
        InputView.readMoving(game);
        return;
      }

      game.end(game);
    });
  },
};

module.exports = InputView;
