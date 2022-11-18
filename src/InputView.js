const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const BridgeMaker = require("./BridgeMaker");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator");
const OutputView = require("./OutputView");
const Console = MissionUtils.Console;

const InputView = {
  
  readBridgeSize() {
    Console.readLine("\n다리의 길이를 입력해주세요.\n", (inputBridgeSize) => {
      this.bridgeSizeException(inputBridgeSize);
      bridge = BridgeMaker.makeBridge(inputBridgeSize, BridgeRandomNumberGenerator.generate);
      InputView.readMoving(bridge, 0, 1);
      return bridge;
    });
  },

  bridgeSizeException(inputBridgeSize) {
    if (isNaN(inputBridgeSize)) throw new Error("[ERROR] 문자를 입력하실 수 없습니다.");
    if(inputBridgeSize<3 || inputBridgeSize>20) throw new Error("[ERROR] 3이상 20이하의 수만 입력할 수 있습니다.");
  },

  readMoving(BRG, turnNumber) {
    const brgGame = new BridgeGame();
    Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (inputMoveUpDown) => {
      this.movingException(inputMoveUpDown);
      let gameContinue = brgGame.move(turnNumber, BRG, inputMoveUpDown);
      if (gameContinue > 0) this.readMoving(BRG, turnNumber + 1);
      else {
        brgGame.retry(turnNumber, BRG, inputMoveUpDown);
        Console.close();
      }
    })
    return;
  },

  movingException(inputMoveUpDown) {
    if(inputMoveUpDown!="U" || inputMoveUpDown!="D") throw new Error("[ERROR] U 혹은 D만 입력할 수 있습니다.");
  },

  readGameCommand() {
    Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (inputRetry) => {
      this.retryException(inputRetry);
      if (inputRetry == "R") return true;
      if (inputRetry == "Q") return false;
    });
  },

  retryException(inputRetry) {
    if(inputMoveUpDown!="R" || inputMoveUpDown!="Q") throw new Error("[ERROR] R 혹은 Q만 입력할 수 있습니다.");
  },
};

module.exports = InputView;
