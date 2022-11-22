const {Console} = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const BridgeGame = require("./BridgeGame");
const OutputView = require("./OutputView");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
    gameStart() {
        Console.print("다리 건너기 게임을 시작합니다.\n");
    },
    /**
     * 다리의 길이를 입력받는다.
     */
    readBridgeSize() {
        Console.readLine("다리의 길이를 입력해주세요.\n", (bridgeSize) => {
                const bridge = BridgeMaker.makeBridge(bridgeSize, BridgeRandomNumberGenerator.generate);
                const bridgeGame = new BridgeGame(
                    bridge,
                    [[], []],
                    1);
                this.readMoving(bridgeGame, bridge);
            },

            /**
             * 사용자가 이동할 칸을 입력받는다.
             */
            readMoving(bridgeGame, bridgeSize)
        {
            Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (direction) => {
                const movingList = bridgeGame.move(direction);
            }
        }
    ,

        /**
         * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
         */
        readGameCommand()
        {
        }
    ,
    };

    module.exports = InputView;
