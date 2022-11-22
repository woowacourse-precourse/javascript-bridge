const MissionUtils = require('@woowacourse/mission-utils');
const InputView = require('./InputView');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');
const exceptionHandler = require('./ExceptionHandle');

class App {
    async play() {
        MissionUtils.Console.print('다리 건너기 게임을 시작합니다.\n');
        const bridgeLength = await InputView.readBridgeSize();
        exceptionHandler.validateBridgeLength(Number(bridgeLength));

        const bridge = BridgeMaker.makeBridge(
            bridgeLength,
            BridgeRandomNumberGenerator.generate
        );

        let choosen;
        const bridgeGame = new BridgeGame(bridge);
        for (let i = 0; i < bridgeLength; i++) {
            choosen = await InputView.readMoving();
            exceptionHandler.validateChoice(choosen);

            const crossSuccess = bridgeGame.move(choosen);
            if (!crossSuccess) {
                const retryOrQuit = await InputView.readGameCommand();
                exceptionHandler.validateRestartInput(retryOrQuit);
                if (retryOrQuit === 'Q') {
                    break;
                }
                bridgeGame.retry();
                i = -1;
            }
        }
        OutputView.printResult(
            bridge,
            bridgeGame.getPosition(),
            choosen,
            bridgeGame.getTryCount()
        );
        MissionUtils.Console.close();
    }
}

const app = new App();
app.play();

module.exports = App;
