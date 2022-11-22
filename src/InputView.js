const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("./BridgeMaker.js");
const BridgeRandomNumberGenerator = require("./BridgeRandomNumberGenerator.js");
const OutputView = require("./OutputView.js");
const { generate } = BridgeRandomNumberGenerator;

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize(bridgeGame) {
    MissionUtils.Console.readLine("다리의 길이를 입력해주세요.\n", (str) => {
      this.checkBridgeSize(str, bridgeGame);
    });
  },

  checkBridgeSize(str, bridgeGame){
    try{
      const length = parseInt(str);
      if(!/^\d+$/.test(str) || length < 3 || length > 20 && !Number.isInteger(str)) throw ("[ERROR] 입력 오류.");
      bridgeGame.init(BridgeMaker.makeBridge(length, generate));
      this.readMoving(bridgeGame);
    } catch(error){
      MissionUtils.Console.print(error);
      this.readBridgeSize(bridgeGame);
    }
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(bridgeGame) {
    MissionUtils.Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", (str) => {
      try{
        if(["U", "D"].includes(str)){
          const result = bridgeGame.move(str);
          this.checkReturn(bridgeGame, result);
        } else throw ("[ERROR] 입력 오류.");
      } catch(error) {;
        MissionUtils.Console.print(error);
        this.readMoving(bridgeGame);
      }})
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(bridgeGame) {
    MissionUtils.Console.readLine("\n게임을 다시 시작할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", (str) => {
      this.checkInput(str, bridgeGame);
    });
  },

  checkReturn(bridgeGame, result){
    if(result == "retry") this.readMoving(bridgeGame);
    else {
      const moveBridge = bridgeGame.getMoveBridge();
      OutputView.printMap(moveBridge);
      if(result === "GameOver") this.readGameCommand(bridgeGame);
      else if(result === "GameClear") OutputView.printResult(bridgeGame, true);
      else if(result === "nextMove") this.readMoving(bridgeGame);
    }
  },

  checkInput(str, bridgeGame){
    try{
      if(str === "R"){
        const result = bridgeGame.retry();
        this.checkReturn(bridgeGame, result);
      }
      else if(str === "Q") OutputView.printResult(bridgeGame, false);
      else throw ("[ERROR] 입력 오류");
    } catch(error){
      MissionUtils.Consloe.print(error);
      this.readGameCommand(bridgeGame);
    }
  }
};

module.exports = InputView;
