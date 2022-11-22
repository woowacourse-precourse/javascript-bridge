const Print = require('./Print');
const OutputView  = require('./OutputView');
const InputView = require('./InputView');
const BridgeGame = require('./BridgeGame');
const { BridgeLengthInput, DirectionChoiceInput, RetryInput} = require('./Validator/Validator');

class GameManager {
    #bridgeGame


    constructor() {
        this.#bridgeGame = new BridgeGame();
    }

    startGame() {
        Print.StartMessage();
        this.setBridgeLength();
    }

    setBridgeLength() {
        InputView.readBridgeSize(this.isValidLength.bind(this));
    }

    isValidLength(userInput) {
        this.bridgeLengthInput = new BridgeLengthInput(userInput);
        if (!this.bridgeLengthInput.check()) {
            return this.setBridgeLength();
        }
        return this.generateBridge(userInput);
    }

    generateBridge(userInput) {
        this.#bridgeGame.createBridge(userInput);
        this.playRound();
    }
    
    playRound() {
        InputView.readMoving(this.isValidDirection.bind(this));
    }

    isValidDirection(userInput) {
        this.directionChoiceInput = new DirectionChoiceInput(userInput);
        if(!this.directionChoiceInput.check()){
            return this.playRound();
        }
        return this.moveBridge(userInput);
    }

    moveBridge(userInput) {
        const [correctChoice, UserIsWinnner] = this.#bridgeGame.move(userInput);
        const [thisRound, bridge] = this.#bridgeGame.getGameInfo();
        OutputView.printMap(thisRound, bridge);
        if(!correctChoice) return this.askRetry();
        if(UserIsWinnner) return this.quitGame(true);
        return this.playRound();
    };

    askRetry() {
        InputView.readGameCommand(this.isValidCommand.bind(this));
    }

    isValidCommand(userInput) {
        this.retryInput = new RetryInput(userInput);
        if(!this.retryInput.check()){
            return this.askRetry();
        }
        return this.Continue(userInput);
    }

    Continue(userCommand) {
        if(this.#bridgeGame.retry(userCommand)){
            return this.playRound();
        }
        return this.quitGame();
    }

    quitGame() {
        const [userchoice, bridge, tryCount] = this.#bridgeGame.getGameInfo();
        OutputView.printResult(userchoice, bridge, tryCount);
    }

    

}

module.exports = GameManager;