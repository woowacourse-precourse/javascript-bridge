const { Console } = require("@woowacourse/mission-utils");
const BridgeGame = require("./BridgeGame");
const { makeBridge } = require("./BridgeMaker");
const { generate } = require("./BridgeRandomNumberGenerator");
const { printResult, printMap } = require("./OutputView");
const { validateInput } = require("./Validator");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    let mainBridge = [];
    Console.readLine("다리의 길이를 입력해주세요.", (bridgeSize) => {
      try {
        validateInput(bridgeSize);
      } catch (error) {
        Console.print(error);
        InputView.readBridgeSize();
      }
      mainBridge = makeBridge(bridgeSize, generate); //기준 다리 출력 형식 [U,D,D]
      // console.log(mainBridge); //로직 완성 후 삭제하기
      const bridgeGame = new BridgeGame(mainBridge); //인스턴스 생성
      InputView.readMoving(mainBridge, bridgeGame); //움직임 입력 받기
    });
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(mainBridge, bridgeGame) {
    Console.readLine(
      "이동할 칸을 선택해주세요. (위: U, 아래: D)",
      (moveInput) => {
        bridgeGame.move(moveInput);
        printMap(bridgeGame.userBridge);
        if (!bridgeGame.hasNext && bridgeGame.finish) {
          printResult("최종 게임 결과");
          printMap(bridgeGame.userBridge);
          printResult("게임 성공 여부: 성공");
          printResult(`총 시도한 횟수: ${bridgeGame.retrycount}`);
          return;
        }
        if (!bridgeGame.hasNext) {
          InputView.readGameCommand(mainBridge, bridgeGame);
          return;
        }
        InputView.readMoving(mainBridge, bridgeGame);
      }
    );
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand(mainBridge, bridgeGame) {
    Console.readLine(
      "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)",
      (retryInput) => {
        if (retryInput === "R") {
          bridgeGame.init();
          InputView.readMoving(mainBridge, bridgeGame);
          return;
        }
        if (retryInput === "Q") {
          printResult("최종 게임 결과");
          printMap(bridgeGame.userBridge);
          printResult("게임 성공 여부: 실패");
          printResult(`총 시도한 횟수: ${bridgeGame.retrycount - 1}`);
          Console.close();
          return;
        }
      }
    );
  },
};

module.exports = InputView;
