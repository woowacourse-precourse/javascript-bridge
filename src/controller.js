const InputView = require("./InputView");
const OutputView = require("./OutputView")
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const userBridgeCorrect = bridgeGame.userPickedUpOrDown;


class Controller{
    #number;
    #selectUpOrDown;

    start(){
        OutputView.printStart();
        this.#number = InputView.readBridgeSize();
        this.createBridge = makeBridge(this.#number, generate);
        this.gameProgress();
    }

    gameProgress(){
        while(bridgeGame.userPickedArr.length < this.#number){
            this.#selectUpOrDown = InputView.readMoving();
            bridgeGame.move(this.createBridge, this.#selectUpOrDown);
            OutputView.printMap(userBridgeCorrect[0], userBridgeCorrect[1]);
            this.userPickedIsWrong(userBridgeCorrect);
        }
        OutputView.printResult(userBridgeCorrect[0], userBridgeCorrect[1], bridgeGame.attemptCount)
    }

    userPickedIsWrong(userBridgeCorrect){
        if(userBridgeCorrect[0].includes("X") || userBridgeCorrect[1].includes("X")){
            this.gameRunningSelect();
        }
    }
}

module.exports = Controller;