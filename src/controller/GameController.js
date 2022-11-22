const ExceptionController = require("./ExceptionController");
const ViewController = require("./ViewController");

const BridgeGame = require("../model/BridgeGame");
const Crosser = require("../model/Crosser");

const GameController = {
    models: {
        bridgeGame: '',
        crosser: '',
    },

    createBridgeGame(size) {
        this.models.bridgeGame = new BridgeGame(size);
    },

    createCrosser() {
        this.models.crosser = new Crosser();
    },

    exceptionHandling(value, category) {
        let result;
        if (category === 'size') result = this.sizeHandling(value);
        if (category === 'moving') result = this.movingHandling(value);
        if (category === 'retry') result = this.retryHandling(value);
        return result;
    },

    sizeHandling(size) {
        if (ExceptionController.sizeException(size)) {
            this.createBridgeGame(size);
            this.createCrosser();
            return true;
        }
        return false;
    },

    movingHandling(moving) {
        if (ExceptionController.movingException(moving)) {
            const moveResult = this.moveProcessing(moving);
            return moveResult;
        }
        return false;
    },

    moveProcessing(moving) {
        const crosserLocation = this.models.crosser.state.location;
        const result = this.models.bridgeGame.move(moving, crosserLocation);
        this.updateState(moving, result);
        this.printState();
        return result;
    },

    updateState(moving, result) {
        this.models.crosser.updateState(moving, result);
    },

    printState() {
        const state = this.models.crosser.state;
        ViewController.printStateHandling(state);
    },

    determineNext(moveResult) {
        if (moveResult === 'failure') return 'readGameCommand';
        if (this.endCheck() === 'notYet') return 'readMoving';
        this.printResult(true);
    },

    endCheck() {
        const status = this.models.bridgeGame.endCheck(this.models.crosser.state);
        return status;
    },

    printResult(success) {
        ViewController.printResult(this.models.crosser.state, success);
    },

    retryHandling(retry) {
        if(ExceptionController.retryException(retry)) {
            const retryResult = this.models.bridgeGame.retry(retry)
            return retryResult;
        }
        return false;
    },

    determineRetry(retryResult) {
        if(retryResult === 'reset') {
            this.models.crosser.resetState();
            return true;
        }
        this.printResult(false);
    }
}

module.exports = GameController;
