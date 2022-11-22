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
        this.requestBridegeSize();
    }
    
    requestBridegeSize() {
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
        try{
            Exception.isInvalidBridgeSize(bridgeSize);
        } catch(err) {
            this.outputView.printError(err);
            this.requestBridegeSize();
        }
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
            case 'next': this.requestMoving(); break;
            case 'fail': this.requestRetry(); break;
            case 'success': // 게임 성공
                this.bridgeGame.printResults(this.outputView, true);
                break;
        }
    }

    requestRetry() {
        this.inputView.readGameCommand(this.createRetry.bind(this));
    }

    createRetry(command) {
        this.commandException(command);
        this.handleRetryResult(this.bridgeGame.retry(command));   
    }

    handleRetryResult(result) {
        if(result === 'retry') {
            this.requestMoving();
        } else if(result === 'quit') {
            this.bridgeGame.printResults(this.outputView, false);
        }
    }

    commandException(command) {
        Exception.isInvalidCommand(command);
    }

}

module.exports = BridgeController;
