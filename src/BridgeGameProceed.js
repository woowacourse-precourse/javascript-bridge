const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./OutputView');
const InputView = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator  = require('./BridgeRandomNumberGenerator');
const Validation = require('./Validation');
const BridgeGame = require('./BridgeGame');
const PlayersMap = require('./PlayersMap');

class BridgeGameProceed {
#winBridge

#playersBridge

    constructor() {
        this.bridgeGame = new BridgeGame();
        this.playersMap = new PlayersMap();
        this.#playersBridge = [];
        OutputView.printStart();
    }

    start() {
        InputView.readBridgeSize(this.makeMap.bind(this));
    }

    makeMap(bridgeLength) {
        try {
            Console.print('');
            Validation.bridgeLength(bridgeLength);
            this.#winBridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
            this.game();
        } catch (error) {
            Console.print(`${error.message}\n`);
            this.start.call(this);
        }
    }

    game() {
        InputView.readMoving(this.playerMove.bind(this));
    }

    playerMove(nextStep) {
        try {
            Validation.nextStep(nextStep);
            this.#playersBridge.push(nextStep);
            const result = this.bridge();
            this.bridgeGame.storage(result);
            this.dividePath(result);
        } catch (error) {
            Console.print(error.message);
            this.game.call(this);
        }
    }

    dividePath(result) {
        if (result.includes('X')) {
            this.#playersBridge = [];
            return this.fail(result);
        }
        if (this.#playersBridge.length === this.#winBridge.length) {
            return this.callWin.call(this);
        }
        this.game();
    }

    bridge() {
        const result = this.playersMap.show(this.#playersBridge, this.#winBridge)
        Console.print(result);
        Console.print('')
        return result;
    }
    
    fail() {
        InputView.readGameCommand(this.gameOverChoice.bind(this));
    }

    gameOverChoice(retryOrNot) {
        try {
            Validation.retry(retryOrNot);
            if (retryOrNot === "R") this.callRetry();
            if (retryOrNot === "Q") this.callFail.call(this); 
        } catch (error) {
            Console.print(error.message);
            this.fail.call(this);
        }
    }

    callFail() {
        this.bridgeGame.fail();
    }

    callWin() {
        this.bridgeGame.win();
    }

    callRetry() {
        this.bridgeGame.retry();
        this.game.call(this);
    }
}

module.exports = BridgeGameProceed;
