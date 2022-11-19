/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */
const MissionUtils = require("@woowacourse/mission-utils");
const BridgeMaker = require("../src/BridgeMaker");
const randnum_gen = require("../src/BridgeRandomNumberGenerator");
const OutputView = require("../src/OutputView");
const InputView = {
  /**
  * 다리의 길이를 입력받는다.
  */
   readBridgeSize() {
    MissionUtils.Console.readLine('다리의 길이를 입력해주세요.', (bridge_len) => {
      if(bridge_len<3 || bridge_len>20){
        throw new Error(`[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.`)
      }
      MissionUtils.Console.print(`${bridge_len}`);
      Game_Bridge = BridgeMaker.makeBridge(bridge_len, randnum_gen)             
      this.readMoving(Game_Bridge, 0)
    });
  },

  /**
  * 사용자가 이동할 칸을 입력받는다.
  */
  readMoving(Game_Bridge, curr_loc) {
    MissionUtils.Console.readLine('이동할 칸을 선택해주세요. (위: U, 아래: D)', (move_dir) => {
      MissionUtils.Console.print(`${move_dir}`);      
      OutputView.printMap(Game_Bridge, move_dir, curr_loc)
      if (Game_Bridge[curr_loc] !== move_dir){
        //다리를 맞추는데 실패한 경우
        this.readGameCommand()
      } (Game_Bridge[curr_loc] !== move_dir) {
        //다리를 맞추는데 성공한 경우
        curr_loc += 1
        if (curr_loc === Game_Bridge.length){
          this.readGameCommand()
        } else {
          this.readMoving(Game_Bridge, curr_loc)
        }
      }      
    });
  },

  /**
  * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
  */
  readGameCommand() {    
    MissionUtils.Console.readLine('게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)', (answer) => {
      MissionUtils.Console.print(`${answer}`);
      MissionUtils.Console.close();
    });
  },
};

module.exports = InputView;
