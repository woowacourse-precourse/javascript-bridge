const Exception = require('./utils/Exceptions');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');

// 게임 로직 관리
class BridgeController {
    constructor(views) {
        this.bridgeGame = new BridgeGame();
        this.inputView = views.inputView,
        this.outputView = views.outputView
        this.start()
    }

    start() {
        this.outputView.printStart();
        this.inputView.readBridgeSize(this.createBridge.bind(this));
    }

    createBridge(bridgeSize) {
        this.bridgeSizeException(bridgeSize);
        const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
        this.bridgeGame.setBridge(bridge);
        this.requestMoving();
    }

    requestMoving() {
        this.inputView.readMoving(this.createMoving.bind(this));
    }

    bridgeSizeException(bridgeSize) {
        Exception.isNotNumber(bridgeSize);
        Exception.bridgeSizeOutofIndex(bridgeSize);
    }

    createMoving(moving) {
        this.movingException(moving);
        this.handleMovingResult(this.bridgeGame.move(moving));   
    }

    movingException(moving) {
        Exception.isInvalidMoving(moving);
    }

    handleMovingResult(result) {
        this.bridgeGame.printBridge(this.outputView);
        switch (result) {
            case 'next': { // 다음 칸 이동
                this.requestMoving();
                break;
            }
            case 'fail': { // 게임 실패
                this.requestRetry();
                break;
            }
            case 'success': { // 게임 성공
                this.outputView.printResult();
                break;
            }
        }
    }

    requestRetry() {
        this.inputView.readGameCommand(this.createRetry.bind(this));
    }

    createRetry(command) {
        // 재시작 여부 처리 함수
    }

}

module.exports = BridgeController;
