const OutputView = require('./view/OutputView');
const InputView = require('./view/InputView');

class BridgeGameProceed {
    start() {
        // 다리 건너기 게임을 시작합니다.
        OutputView.printStart();
        // 다리의 갯수 입력 3~20;
        InputView.readBridgeSize(3);
    }

    game() {
        
    }
}

let a = new BridgeGameProceed();
a.start();

module.exports = BridgeGameProceed;