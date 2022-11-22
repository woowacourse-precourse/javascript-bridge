const MissionUtils = require('@woowacourse/mission-utils');
const OutputView = require('./OutputView');
const BridgeMaker = require('./BridgeMaker');
const BridgeGame = require('./BridgeGame');
const exceptionHandler = require('./ExceptionHandle');
const BridgeRandomNumberGenerator = require('./BridgeRandomNumberGenerator');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    /**
     * 다리의 길이를 입력받고, 다리를 생성한다.
     */
    readBridgeSize() {
        const query = '다리의 길이를 입력해주세요.\n';
        MissionUtils.Console.readLine(query, (userInput) => {
            exceptionHandler.validateBridgeLength(Number(userInput));
            const bridge = BridgeMaker.makeBridge(
                Number(userInput),
                BridgeRandomNumberGenerator.generate
            );
            const bridgeGame = new BridgeGame(bridge);
            this.readMoving(bridgeGame, 0, '');
        });
    },

    /**
     * 사용자가 이동할 칸을 입력받는다.
     * @param {BridgeGame} bridgeGame
     * @param {number} iter // 이동한 횟수
     */
    readMoving(bridgeGame, iter, lastChoice) {
        if (bridgeGame.getLength() === iter) {
            OutputView.printResult(bridgeGame, lastChoice); // 성공 후 종료
            return;
        }
        const query = '이동할 칸을 선택해주세요. (위: U, 아래: D)\n';
        MissionUtils.Console.readLine(query, (choosen) => {
            exceptionHandler.validateChoice(choosen);
            const cross = bridgeGame.move(choosen);
            OutputView.printMap(
                bridgeGame.getBridge(),
                bridgeGame.getPosition(),
                choosen
            );
            if (!cross) {
                InputView.readGameCommand(bridgeGame, choosen);
            } else if (bridgeGame.getLength() > iter) {
                this.readMoving(bridgeGame, iter + 1, choosen);
            }
        });
    },

    /**
     * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
     * @param {BridgeGame} bridgeGame
     * @param {string} choosen
     */
    readGameCommand(bridgeGame, choosen) {
        const query =
            '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n';
        MissionUtils.Console.readLine(query, (retryOrQuit) => {
            exceptionHandler.validateRestartInput(retryOrQuit);
            if (retryOrQuit === 'R') {
                bridgeGame.retry();
                InputView.readMoving(bridgeGame, 0);
            } else {
                OutputView.printResult(bridgeGame, choosen); // 실패 후 종료
            }
        });
    },
};

module.exports = InputView;
