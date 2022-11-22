const InputView = require('./InputView')
const OutputView = require('./OutputView')
class BridgeController{
    startGame(bridgeGame){
        OutputView.printStart()
        this.readSize(bridgeGame)
    }

    readSize(bridgeGame){
        InputView.readBridgeSize(bridgeGame);
    }

    moveBlock(bridgeGame){
        InputView.readMoving(bridgeGame);
    }

    moveNext(board, bridgeGame){
        OutputView.printMap(board);
        InputView.readMoving(bridgeGame);
    }
    
    printError(error, bridgeGame){
        OutputView.printError(error)
        InputView.readBridgeSize(bridgeGame);
    }

    moveFinalRound(attempt, clearedbridge){
        OutputView.printResult(attempt, clearedbridge);
    }

    moveFailedRound(attempt,clearedbridge,direction){
        OutputView.printFailResult(attempt,clearedbridge,direction);
        
    }
    readGameCommand(bridgeGame){
        InputView.readGameCommand(bridgeGame);
    }

    close(){
        OutputView.close()
    }
}

module.exports = BridgeController