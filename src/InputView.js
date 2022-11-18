const BRIDGE_RANDOM_NUMBER_GENERATOR = require("../src/BridgeRandomNumberGenerator");
const BRIDGE_MAKER = require("../src/BridgeMaker");
const BRIDGE_GAME = require("../src/BridgeGame");
const MISSIONUTILS = require("@woowacourse/mission-utils");

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */
  readBridgeSize() {
    MISSIONUTILS.Console.readLine("다리의 길이를 입력해주세요\n", function(input) {
      if (isNaN(input)){
        throw new Error("[ERROR] 다리의 길이는 숫자만 입력 가능합니다");
      }
      
      input = Number(input);
    
      if(input<3 || input>20){
        throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
      }
      
      const bridge = BRIDGE_MAKER.makeBridge(input,BRIDGE_RANDOM_NUMBER_GENERATOR.generate());
      MISSIONUTILS.Console.print(bridge);
      InputView.readMoving(input-1, 0, bridge, "", 1);
    });

  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(count, i, bridge, bridgeMap, tryCount) {
    MISSIONUTILS.Console.readLine("\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n", function(input) {
      if (!isNaN(input)){
        throw new Error("[ERROR] 이동할 칸은 알파벳으로 선택해야 합니다");
      }
      
      if(input != 'U' && input != 'D'){
        throw new Error("[ERROR] 이동할 칸은 U 또는 D만 선택해야 합니다.");
      }
      
      var temp = new BRIDGE_GAME;
      temp.move(input, count, i, bridge, bridgeMap, tryCount);
    });


  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
   readGameCommand(count, bridge, bridgeMap, tryCount) {
    MISSIONUTILS.Console.readLine("\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n", function(input) {
      if (!isNaN(input)){
        throw new Error("[ERROR] 재시도 여부는 알파벳으로 입력해야 합니다");
      }
      
      if(input != 'R' && input != 'Q'){
        throw new Error("[ERROR] 재시도 여부는 R 또는 Q만 입력해야 합니다.");
      }
      
      var temp = new BRIDGE_GAME;
      temp.retry(input, count, bridge, bridgeMap, tryCount);

    });
  },
};

module.exports = InputView;
