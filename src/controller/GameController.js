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

    exceptionHandling(value, category) {
        let result;
        if(category === 'size') result = this.sizeHandling(value) ? true : false;
        return result;
    },

    sizeHandling(size) {
        if(ExceptionController.sizeException(size)){
            this.createBridgeGame(size);
            return true;
        }
        return false;
    },
}

module.exports = GameController;
