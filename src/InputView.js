const BRIDGE_RANDOM_NUMBER_GENERATOR = require("../src/BridgeRandomNumberGenerator");
const BRIDGE_MAKER = require("../src/BridgeMaker");
const BRIDGE_GAME = require("../src/BridgeGame");
const MISSIONUTILS = require("@woowacourse/mission-utils");
const OUTPUTVIEW = require("../src/Outputview");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MISSIONUTILS.Console.readLine("다리의 길이를 입력해주세요\n", function(input) {
      if (isNaN(input) || input<3 || input>20){
        try {
          if (isNaN(input) || input<3 || input>20){
            throw new Error;
          }
        } catch (err) {
          MISSIONUTILS.Console.print("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
          return InputView.readBridgeSize();
        }
      }
      
      input = Number(input);
      
      const bridge = BRIDGE_MAKER.makeBridge(input,BRIDGE_RANDOM_NUMBER_GENERATOR.generate);
      MISSIONUTILS.Console.print(bridge);
      InputView.readMoving(input-1, 0, bridge, "", 1);
    });

  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(count, i, bridge, bridgeMap, tryCount) {
    MISSIONUTILS.Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", function(input) {
      try {
        if (!isNaN(input)){
          throw new Error;
        }
        if(input != 'U' && input != 'D'){
          throw new Error;
        }
      } catch (err) {
        MISSIONUTILS.Console.print("[ERROR] 이동할 칸은 U 또는 D만 선택해야 합니다.");
        return InputView.readMoving(count, i, bridge, bridgeMap, tryCount);
      }
      
      var temp = new BRIDGE_GAME;
      var word = temp.move(input, count, i, bridge, bridgeMap, tryCount);

      switch (word) {
        case "Success":
          bridgeMap = OUTPUTVIEW.printMap(i, bridge, 'O', bridgeMap);
          OUTPUTVIEW.printResult(bridgeMap, "성공", tryCount);
          MISSIONUTILS.Console.close();
          break;
        case "PrintFirstX":
          bridgeMap = OUTPUTVIEW.printMapFirst(bridge, 'X');
          InputView.readGameCommand(count, bridge, bridgeMap,tryCount);
  
          break;
        case "PrintX":
          bridgeMap = OUTPUTVIEW.printMap(i, bridge, 'X', bridgeMap);
          InputView.readGameCommand(count, bridge, bridgeMap,tryCount);

          break;
        case "PrintFirstO":
          bridgeMap = OUTPUTVIEW.printMapFirst(bridge, 'O');
          InputView.readMoving(count, i+1, bridge, bridgeMap, tryCount);

          break;
        case "PrintO":
          bridgeMap = OUTPUTVIEW.printMap(i, bridge, 'O', bridgeMap);
          InputView.readMoving(count, i+1, bridge, bridgeMap, tryCount);

          break;
    
        default:
          break;
      }
    });


  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   readGameCommand(count, bridge, bridgeMap, tryCount) {
    MISSIONUTILS.Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", function(input) {
      try {
        if (!isNaN(input)){
          throw new Error;
        }
        if(input != 'R' && input != 'Q'){
          throw new Error;
        }
      } catch (err) {
        MISSIONUTILS.Console.print("[ERROR] 재시도 여부는 R 또는 Q만 입력해야 합니다.");
        return InputView.readGameCommand(count, bridge, bridgeMap, tryCount);
      }
      
      var temp = new BRIDGE_GAME;
      var word = temp.retry(input, count, bridge, bridgeMap, tryCount);

      switch (word) {
        case "Retry":
          InputView.readMoving(count, 0, bridge, "" ,tryCount+1);
          
          break;
        case "END":
          OUTPUTVIEW.printResult(bridgeMap, "실패", tryCount);
          MISSIONUTILS.Console.close();
          break;
      
        default:
          break;
      }

    });
  },
};

module.exports = InputView;
