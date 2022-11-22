const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const { MissionUtils } = require("@woowacourse/mission-utils");

class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    const bridges = this.make_bridges();
    var try_count = 1;
    this.cross_the_bridge(try_count, bridges);
  }
 
  make_bridges(){
    const bridge_size = InputView.readBridgeSize();
    const bridges = BridgeMaker.makeBridge(bridge_size, BridgeRandomNumberGenerator.generate);
    return bridges;
  }

  cross_the_bridge(try_count, bridges){
    var guesses = []; 
    const game = new BridgeGame();
    for (var i =0;i!=bridges.length;i++){
      const moving = InputView.readMoving();   
      guesses = game.move(i, bridges, moving, guesses);
      OutputView.printMap(bridges, guesses);
      if (guesses[i] == false)  break;//game stop
    }
    this.determine(game, guesses, bridges, try_count);
  }

  determine(game, guesses, bridges, try_count){
    if (guesses.length == bridges.length){
      OutputView.printResult(true, try_count, guesses, bridges);
      return;
    }
    const gameCommand = InputView.readGameCommand();
    game.retry(gameCommand,guesses, bridges, try_count);
  }
}


module.exports = App;
