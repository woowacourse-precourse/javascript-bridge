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
  readBridgeSize() {
    MissionUtils.Console.readLine(INPUT_BRIDGE_LEN_STR, (bridgeLen) => {
      bridgeLenValidator(bridgeLen);
      const bridgeGame = new Game.BridgeGame(
        BridgeMaker.makeBridge(bridgeLen, BridgeRandomNumberGenerator.generate)
      );
      InputView.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    MissionUtils.Console.readLine(INPUT_USER_GO, (selectBridge) => {
      bridgeGame.move(this.userSelectValueTreater(selectBridge));
      OutputView.printMap(OutputView.closeMap({ ...bridgeGame.bridgeMap }));
      InputView.checkIsCorrect(bridgeGame);
    });
  },

  checkIsCorrect(bridgeGame) {
    if (!bridgeGame.isOkWay) {
      InputView.readGameCommand(bridgeGame);
      return;
    }
    InputView.checkisGameFinish(bridgeGame);
    return;
  },

  checkisGameFinish(bridgeGame) {
    if (bridgeGame.isOkWay && bridgeGame.finishGame) {
      InputView.goPrintResult(bridgeGame);
      return;
    }
    if (bridgeGame.isOkWay && !bridgeGame.finishGame) {
      InputView.readMoving(bridgeGame);
      return;
    }
  },

  goPrintResult(bridgeGame) {
    OutputView.printResult(
      bridgeGame.finishGame,
      bridgeGame.bridgeMap,
      bridgeGame.tryCnt
    );
  },

  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine(INPUT_USER_DECISION, (userDecision) => {
      userDecisionValidator(userDecision);
      if (userDecision == "R") {
        InputView.retryGameSetter(bridgeGame);
        return;
      }
      InputView.goPrintResult(bridgeGame);
    });
  },

  userSelectValueTreater(userSelectValue) {
    isUandD(userSelectValue);
    return userSelectValue;
  },

  retryGameSetter(bridgeGame) {
    bridgeGame.tryCnt += 1;
    // 일단 현재 진행상황 가져오는건 ㄱㅊ 근데 재시도할때 틀린부분 삭제하는게 좋을듯
    InputView.cutLastTryMap(bridgeGame.bridgeMap);
    InputView.readMoving(bridgeGame);
  },

  cutLastTryMap(bridgeMap) {
    bridgeMap.up = bridgeMap.up.substring(0, bridgeMap.up.length - 4);
    bridgeMap.down = bridgeMap.down.substring(0, bridgeMap.down.length - 4);
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
