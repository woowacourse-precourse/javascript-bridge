const InputView = require("./InputView");
const OutputView = require("./OutputView")
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");

class Controller{
    #number;

    start(){
        OutputView.printStart();
        this.#number = InputView.readBridgeSize();
        this.createBridge = makeBridge(this.#number, generate);
        this.gameProgress();
    }
}