const { Console } = require('@woowacourse/mission-utils');

const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator  = require('./BridgeRandomNumberGenerator');
const Validation = require('./Validation');
const BridgeGame = require('./BridgeGame');

class BridgeGameProceed {
#bridge
// #round

    constructor() {
        this.BridgeGame = new BridgeGame();
    }

    start() {
        OutputView.printStart();
        InputView.readBridgeSize((bridgeLength) => {
            Console.print('');
            Validation.bridgeLength(bridgeLength);
            this.#bridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator.generate);
            console.log(this.#bridge);
            this.game();
        });
    }

    game() {
        InputView.readMoving((nextStep) => {
            // Validation.nextStepValue(nextStep);
            // OutputView.printMap(nextStep ,this.#buildBridge[round]);
            // #buildBridge 해당 다리 상태 저장
            // 실패했을 경우
                // fail() 호출
            // 성공했을 경우
                // 끝까지 도달한 경우
                    // win() 호출
                // 다리가 남은 경우
                    // game() 호출
        });
    }

    // fail() {
    //     InputView.readGameCommand((retryOrNot) => {
    //         this.BridgeGame.retry(retryOrNot);
    //     })     
    // }

    // win() {
    //     OutputView.printResult()
    //     // OutputView.printMap()
    //     OutputView.printWin()
    //     OutputView.printAttemptCount(this.#round)
    //     Console.close();
    // }
}

let a = new BridgeGameProceed();
a.start();

module.exports = BridgeGameProceed;

// 각각의 개체와 클래스들을 하나로 묶어주는 클래스이다.