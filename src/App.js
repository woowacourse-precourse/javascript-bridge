const BridgeMaker = require("./BridgeMaker");
const InputView = require("./InputView");
const OutputView = require("./OutputView");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");


class App {
  play() {
    const MissionUtils = require("@woowacourse/mission-utils");
    MissionUtils.Console.print("다리 건너기 게임을 시작합니다.");
    const bridges = this.make_bridges();
    this.cross_the_bridge(bridges);
  }
 
  make_bridges(){
    const bridge_size = InputView.readBridgeSize();
    const bridges = BridgeMaker.makeBridge(bridge_size, BridgeRandomNumberGenerator.generate);
    return bridges;
  }

  cross_the_bridge(bridges){
    var guesses = []; 
    const game = new BridgeGame();
    for (var i =0;i!=bridges.length;i++){
      const moving = InputView.readMoving();   
      guesses = game.move(i, bridges, moving, guesses);
      OutputView.printMap(bridges, guesses);
      if (guesses[i] == false)  break;//game stop
    }
    this.determine(game, guesses, bridges);
  }

  determine(game, guesses, bridges){
    if (guesses.length == bridges.length){
      //게임 성공
      OutputView.printResult();
    }
    const gameCommand = InputView.readGameCommand();
    game.retry(gameCommand);
  }
}


module.exports = App;
