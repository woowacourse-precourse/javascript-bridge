const MissionUtils = require("@woowacourse/mission-utils");
const Game = require("./BridgeGame");

const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const BRIDGELENGTH_ERR_MESSAGE =
  "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.";

const USERSELECT_ERR_MESSAGE = "[ERROR] 입력은 U 아니면 D여야 합니다.";

const USERDECISION_ERR_MESSAGE = "[ERROR] 입력은 R 아니면 Q여야 합니다.";

const INPUT_BRIDGE_LEN_STR = "다리의 길이를 입력해주세요.\n";

const INPUT_USER_GO = "이동할 칸을 선택해주세요. (위: U, 아래: D)\n";

const INPUT_USER_DECISION =
  "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)";

const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MissionUtils.Console.readLine(INPUT_BRIDGE_LEN_STR, (bridgeLen) => {
      bridgeLenValidator(bridgeLen);
      const bridgeGame = new Game.BridgeGame(
        BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate)
      );

      InputView.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(INPUT_USER_GO, (selectBridge) => {
      bridgeGame.move(this.userSelectValueTreater(selectBridge));
      const userPrint = OutputView.mapMaker(
        bridgeGame.latestProgressCnt,
        bridgeGame.isOkWay,
        bridgeGame.bridge
      );

      if (bridgeGame.finishGame) {
        OutputView.printResult(true);
        return;
      }
      if (!bridgeGame.isOkWay) {
        //죽었을때
        InputView.readGameCommand(bridgeGame);
      }
      InputView.readMoving(bridgeGame);
    });
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(INPUT_USER_DECISION, (userDecision) => {
      userDecisionValidator(userDecision);
    });
  },

  userSelectValueTreater(userSelectValue) {
    isUandD(userSelectValue);
    return userSelectValue;
  },
};

const bridgeLenValidator = (bridgeLen) => {
  isInRange(bridgeLen);
  isIntNumber(bridgeLen);
};

const isInRange = (bridgeLen) => {
  if (bridgeLen > 20 || bridgeLen < 3) {
    throw new Error(BRIDGELENGTH_ERR_MESSAGE);
  }
};

const isIntNumber = (bridgeLen) => {
  if (isNaN(parseInt(bridgeLen)) || !Number.isInteger(parseFloat(bridgeLen))) {
    throw new Error(BRIDGELENGTH_ERR_MESSAGE);
  }
};

const isUandD = (input) => {
  if (input == "U" || input == "D") {
    return;
  }
  throw new Error(USERSELECT_ERR_MESSAGE);
};

const userDecisionValidator = (input) => {
  if (input == "R" || input == "Q") {
    return;
  }
  throw new Error(USERDECISION_ERR_MESSAGE);
};

module.exports = InputView;
