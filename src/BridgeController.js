const InputView = require('./InputView')
const OutputView = require('./OutputView')
class BridgeController{
    startGame(bridgeGame){
        OutputView.printStart()
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

    moveFailedRound(bridgeGame,attempt, clearedbridge){
        OutputView.printFailResult(attempt, clearedbridge);
        InputView.readGameCommand(bridgeGame);
    }

    close(){
        OutputView.close()
    }
}

module.exports = BridgeController