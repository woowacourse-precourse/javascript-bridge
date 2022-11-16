const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const bridgeGame = require('../model/BridgeGame');
const {DEFAULTS, CONSOLELINE, ERRORLINE} = require('../utils/Constants');
const validation = require('../utils/Validation');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

let answer = [];
let cnt_move = 0;
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(){
    MissionUtils.Console.readLine(CONSOLELINE.BRIDGE_LENGTH_INPUT, (input) => {
      try{
        validation.checkBridgeSize(input);
      } catch(err){
        MissionUtils.Console.print(ERRORLINE.BRIDGE_LENGTH_ERROR);
        return this.readBridgeSize();
      }
      this.getBridge(input);
    })
  },

  getBridge(input){
    const bridgeAnswer = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    answer = bridgeAnswer;
    this.readMoving(bridgeAnswer);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answer) {
    cnt_move += 1;
    MissionUtils.Console.readLine(CONSOLELINE.MOVE_INPUT, (upOrdown) => {
      try{
        validation.checkCanMove(upOrdown);
      } catch(err){
        MissionUtils.Console.print(ERRORLINE.MOVE_ERROR);
        return this.readMoving(answer);
      }
      const gameLog = OutputView.printMap(answer, upOrdown);
      if(this.restartCheck(cnt_move, gameLog)){
        cnt_move = 0;
        return this.readGameCommand();
      }
      this.readMoving(answer);
    })
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(CONSOLELINE.RESTART_CHECK, (restart) => {
      try{
        validation.checkRestartOrNot(restart);
      } catch(err){
        MissionUtils.Console.print(ERRORLINE.RESTART_ERROR);
        return this.readGameCommand();
      }
      this.readMoving(answer);
    })
  },

  restartCheck(cnt_move, gameLog){
    if (cnt_move == answer.length){
      bridgeGame.init();
      return true;
    }
    if (gameLog[0][gameLog[0].length-1] === 'X' || gameLog[1][gameLog[1].length-1] === 'X'){
      bridgeGame.init();
      return true;
    }
    return false;
  }
};

module.exports = InputView;
