const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
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
            console.log(this.#winBridge);
            this.game();
        } catch (error) {
            Console.print(error.message);
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
            this.dividePath(result);
            this.game();
        } catch (error) {
            Console.print(error.message);
            this.game.call(this);
        }
    }

    dividePath(result) {
        if (result.includes('X')) {
            this.bridgeGame.move();
            this.#playersBridge = [];
            return this.fail(result);
        }
        if (this.#playersBridge.length === this.#winBridge.length) {
            return this.win(result);
        }
    }

    bridge() {
        const result = this.playersMap.show(this.#playersBridge, this.#winBridge)
        Console.print(result);
        Console.print('')
        return result;
    }

    fail(result) {
        InputView.readGameCommand((retryOrNot) => {
            try {
                Validation.retry(retryOrNot);
                if (retryOrNot === "R") {
                    return this.game();
                }
                if (retryOrNot === "Q") this.bridgeGame.retry(result); 
            } catch (error) {
                Console.print(error.message);
                this.fail.call(this);
            }
        });
    }

    // gameOverChoice(retryOrNot, result) {
    //     try {
    //         Validation.retry(retryOrNot);
    //         if (retryOrNot === "R") {
    //             return this.game();
    //         }
    //         if (retryOrNot === "Q") this.bridgeGame.retry(result); 
    //     } catch (error) {
    //         Console.print(error.message);
    //         this.fail.call(this);
    //     }
    // }

    win(result) {
        OutputView.printResult()
        Console.print(result);
        Console.print('');
        OutputView.printWin()
        this.bridgeGame.countRound();
        Console.close();
    }
}

module.exports = BridgeGameProceed;
