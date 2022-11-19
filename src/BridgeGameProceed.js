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
            console.log(this.#winBridge);
            this.game();
        });
    }

    game() {
        InputView.readMoving((nextStep) => {
            this.#playersBridge.push(nextStep);
            Console.print(this.#playersBridge)

            const result = this.PlayersMap.show(this.#playersBridge, this.#winBridge)
            Console.print(result);
            if (result.includes('X')) {
                this.fail(result);
            }
            
            if (this.#playersBridge.length === this.#winBridge.length) {
                this.win(result);
            }

            this.game();
        });
    }

    fail(result) {
        InputView.readGameCommand((retryOrNot) => {
            this.BridgeGame.retry(retryOrNot, result);
        })     
    }

    win(result) {
        OutputView.printResult()
        OutputView.printMap()
        OutputView.printWin()
        // OutputView.printAttemptCount(this.#round)
        Console.close();
    }
}

let a = new BridgeGameProceed();
a.start();

module.exports = BridgeGameProceed;

// 각각의 개체와 클래스들을 하나로 묶어주는 클래스이다.