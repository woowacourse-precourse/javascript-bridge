const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class BridgeGameProceed {
#buildBridge
// #count

    start() {
        OutputView.printStart();
        InputView.readBridgeSize((bridgeLength) => {
            // Validation
            this.#buildBridge = BridgeMaker.makeBridge(bridgeLength, BridgeRandomNumberGenerator);
            console.log(this.#buildBridge);
        });
        
        this.game();
    }

    game() {
        InputView.readMoving((nextStep) => {
            // Validation
            // OutputView.printMap(nextStep)호출
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

    fail() {
        // InputView.readGameCommand(retryOrNot)
            // retry
                // game() 호출. 원래 사용하던 다리로 시작
            // not
                // OutputView.printResult()
                // OutputView.printMap()
                // OutputView.printFail()
                // OutputView.printprintAttemptCount()
    }

    win() {
        // OutputView.printResult()
        // OutputView.printMap()
        // OutputView.printWin()
        // OutputView.printprintAttemptCount()
    }
}

let a = new BridgeGameProceed();
a.start();

module.exports = BridgeGameProceed;

// 각각의 개체와 클래스들을 하나로 묶어주는 클래스이다.