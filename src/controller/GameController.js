const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../model/BridgeGame');
const InputView = require('../view/InputView');

class GameController {
  constructor() {
    //
  }

  start() {
    Console.print('다리 건너기 게임을 시작합니다.');
    InputView.setting();
  }
}
