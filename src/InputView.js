const MissionUtils = require("@woowacourse/mission-utils");
const Console = MissionUtils.Console;
const BridgeGame = require("./BridgeGame");
const { generate } = require("./BridgeRandomNumberGenerator");
const { makeBridge } = require("./BridgeMaker");
const { validateBridge, validateMove, validateStart } = require("./util/Validation");
const OutputView = require("./OutputView");


const InputView = {

  readBridgeSize() {
    Console.readLine("다리의 길이를 입력해주세요.\n", (inputString) => {
      const inputNum = Number(inputString);
      if (validateBridge(inputNum)) return this.readBridgeSize();
      const bridge = makeBridge(inputNum, generate);
      const bridgeGame = new BridgeGame(bridge);
      this.readMoving(bridgeGame);
    });
  },

  readMoving(bridgeGame) {
    Console.readLine("\n이동할 칸을 선택해주세요. (위:U, 아래:D)\n", (inputMove) => {
      if (validateMove(inputMove)) return this.readMoving(bridgeGame);
      bridgeGame.move(inputMove);
      OutputView.pushResult(inputMove, bridgeGame.getSuccess());
      OutputView.printMap();
      this.next(bridgeGame);
    });
  },

  next(bridgeGame){
    if(bridgeGame.gameNotFinished()) return this.readMoving(bridgeGame);
    else if(bridgeGame.gameSuccess()) return OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess());
    else return this.readGameCommand(bridgeGame);
  },

  readGameCommand(bridgeGame) {
      Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (restart) => {
        if(validateStart(restart)) return this.readGameCommand();
        if(restart === "Q") OutputView.printResult(bridgeGame.getCount(), bridgeGame.getSuccess());
        if(restart === "R"){
          this.initGame(bridgeGame);
          this.readMoving(bridgeGame);
        }
      });
  },

  initGame(bridgeGame) {
      bridgeGame.retry();
      OutputView.upper.length = 0;
      OutputView.downer.length = 0;
    }
};

module.exports = InputView;
