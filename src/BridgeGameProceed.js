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

#round = 1;

    constructor() {
        this.BridgeGame = new BridgeGame();
        this.PlayersMap = new PlayersMap();
        this.#playersBridge = [];
    }

    start() {
        OutputView.printStart();
        InputView.readBridgeSize((bridgeLength) => {
            Console.print('');
            Validation.bridgeLength(bridgeLength);
            this.#winBridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
            // console.log(this.#winBridge);
            this.game();
        });
    }

    game() {
        InputView.readMoving((nextStep) => {
            Validation.nextStep(nextStep);
            this.#playersBridge.push(nextStep);
            const result = this.bridge();

            if (result.includes('X')) this.fail(result);
            if (this.#playersBridge.length === this.#winBridge.length) this.win(result);
            
            this.game();
        });
    }

    bridge() {
        const result = this.PlayersMap.show(this.#playersBridge, this.#winBridge)
        Console.print(result);
        Console.print('')
        return result;
    }

    fail(result) {
        this.BridgeGame.move();
        InputView.readGameCommand((retryOrNot) => {
            Validation.retry(retryOrNot);
            if (retryOrNot === "R") {
                this.#playersBridge = [];
                return this.game();
            }
            if (retryOrNot === "Q") this.BridgeGame.retry(result); 
        })     
    }

    win(result) {
        OutputView.printResult()
        Console.print(result);
        Console.print('');
        OutputView.printWin()
        OutputView.printAttemptCount(this.#round)
        Console.close();
    }
}

module.exports = BridgeGameProceed;
