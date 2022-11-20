const MissionUtils = require('@woowacourse/mission-utils');
const InputVIew = require('./InputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const BridgeGame = require('./BridgeGame');
const OutputView = require('./OutputView');

class App {
  play() {
    MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
    const BRIDGE_SIZE = InputVIew.readBridgeSize();
    if (BRIDGE_SIZE === -1) {
      return 0;
    }
    const BRIDGE = BridgeMaker.makeBridge(BRIDGE_SIZE,BridgeRandomNumberGenerator.generate);
    const bridge_game = new BridgeGame(BRIDGE_SIZE, BRIDGE);
    this.moving(bridge_game);
    MissionUtils.Console.close();
  }

  moving(bridge_game) {   
    for (let i = 0; i < bridge_game.size; i++) {
      if (bridge_game.move(InputVIew.readMoving(), i)) {
        OutputView.printMap(bridge_game.current_moving, true);
        continue;
      } 
      OutputView.printMap(bridge_game.current_moving, false);
      this.retrying(bridge_game);
      return; 
    }
    OutputView.printResult(bridge_game.current_moving, true, bridge_game.try);
  }

  

  retrying(bridge_game) {
    let command = InputVIew.readGameCommand();
    if (bridge_game.retry(command)) {//'Q'
      OutputView.printResult(bridge_game.current_moving, false, bridge_game.try);
      return;
    }
    //'R'
    this.moving(bridge_game);
  }
}

module.exports = App;
