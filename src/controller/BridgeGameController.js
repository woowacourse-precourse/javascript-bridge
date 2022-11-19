const Bridge = require("../model/Bridge");
const OutputView = require('../view/OutputView');
const { ERROR_HANDLING } = require("../Error");

/**
 * View로 부터 받은 요청을 처리하는 Controller
 */
class BridgeGameController {
    /**
     * 사용자가 입력한 다리 길이 만큼 다리를 생성하는 메서드 
     * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 건너기 게임
     * @param {number} size 
     */
    makeBridge(bridgeGame, size) {
        try {
            bridgeGame.setBridge(new Bridge(size));
        } catch (error) {
            ERROR_HANDLING[error.message](bridgeGame, error.message);
        }
    }

    /**
     * 사용자가 입력한 이동 타입에 따라 이동하는 메서드
     * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 게임
     * @param {string} moveType 이동 타입, 위 칸이면 U, 아래 칸이면 D
     * @returns {function(): void} 다리를 모두 건넜을 때만 게임 종료 메서드 return
     */
    move(bridgeGame, moveType) {
        try {
            bridgeGame.move(moveType);
            OutputView.printMap(bridgeGame);

            if (bridgeGame.isEndPosition())
                return OutputView.printResult(bridgeGame);
        } catch (error) {
            ERROR_HANDLING[error.message](bridgeGame, error.message);
        }
    }

    /**
     * 사용자가 입력한 값에 따라 재시작 혹은 종료를 실행하는 메서드
     * @param {BridgeGame} bridgeGame 현재 실행 중인 다리 건너기 게임
     * @param {string} command 재시작인 경우 R, 종료인 경우 Q
     */
    restartOrEnd(bridgeGame, command) {
        try {
            bridgeGame.validateCommand(command);
            this.restartType[command](bridgeGame);
        } catch (error) {
            ERROR_HANDLING[error.message](bridgeGame, error.message);
        }
    }

    /**
     * 사용자가 재시작 혹은 종료 값을 입력했을 때 값에 따라 실행할 함수를 저장하고 있는 객체
     */
    restartType = {
        /**
         * 게임을 종료하는 함수
         * @param {BridgeGame} bridgeGame 
         */
        Q(bridgeGame) {
            OutputView.printResult(bridgeGame);
            bridgeGame.exit();
        },

        /**
         * 게임을 재시작 하는 함수
         * @param {BridgeGame} bridgeGame 
         */
        R(bridgeGame) {
            bridgeGame.retry();
        }
    };
}

const bridgeGameController = new BridgeGameController();

module.exports = bridgeGameController;