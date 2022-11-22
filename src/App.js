const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const exceptionHandler = require('./ExceptionHandle');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

class App {
    play() {
        MissionUtils.Console.print('다리 건너기 게임을 시작합니다.');
        InputView.readBridgeSize();
    }
}

const app = new App();
app.play();

module.exports = App;
