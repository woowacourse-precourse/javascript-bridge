const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");

class App {
  play() {
    const bridgeGame = new BridgeGame(InputView.readBridgeSize());

    do{
      do{
        bridgeGame.move(InputView.readMoving());
        OutputView.printMap(bridgeGame.getBridge(), bridgeGame.getPlace());
      }while(!bridgeGame.isEnd().round);
      if(bridgeGame.isEnd().game) break;
    }while(bridgeGame.retry(InputView.readGameCommand()));

    OutputView.printResult(bridgeGame.getBridge(), bridgeGame.getPlace(), bridgeGame.getTry());
  }
}

module.exports = App;
