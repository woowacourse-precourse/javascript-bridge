const { Console } = require('@woowacourse/mission-utils');
const { GAME_MESSAGE } = require('./Constants');
const { generate } = require('./BridgeRandomNumberGenerator');
const { makeBridge } = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const Validation = require('./Validation');

const InputView = {
  readBridgeSize() {
    Console.readLine(GAME_MESSAGE.LENGTH, (answer) => {
      try {
        Validation.bridgeSize(answer);
        const bridge = makeBridge(Number(answer), generate);
        const game = new BridgeGame(bridge);

        Console.print('');
        InputView.readMoving(game);
      } catch (e) {
        Console.print(e.message);
        InputView.readBridgeSize();
      }
    });
  },
  readMoving(game) {
    Console.readLine(GAME_MESSAGE.MOVING, (answer) => {
      try {
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
      } catch (e) {
        Console.print(e.message);
        InputView.readMoving(game);
      }
    });
  },
  readGameCommand(game) {
    Console.readLine(GAME_MESSAGE.RESTART, (answer) => {
      try {
        Validation.gameCommand(answer);
        if (answer === 'R') {
          game.retry(game);
          InputView.readMoving(game);
          return;
        }

        game.end(game);
      } catch (e) {
        Console.print(e.message);
        InputView.readGameCommand(game);
      }
    });
  },
};

module.exports = InputView;
