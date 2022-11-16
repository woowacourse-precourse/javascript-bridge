const MissionUtils = require('@woowacourse/mission-utils');
const BridgeMaker = require('../BridgeMaker');
const BridgeRandomNumberGenerator = require('../BridgeRandomNumberGenerator');
const bridgeGame = require('../model/BridgeGame');
const {CONSOLELINE} = require('../utils/Constants');
const validation = require('../utils/Validation');
const OutputView = require('./OutputView');

/**
 * 사용자로부터 입력을 받는 역할을 한다.
 */

let answer = [];
const InputView = {
  /**
   * 다리의 길이를 입력받는다.
   */

  readBridgeSize(){
    MissionUtils.Console.readLine(CONSOLELINE.BRIDGE_LENGTH_INPUT, (input) => {
      try{
        validation.checkBridgeSize(input);
      } catch(err){
        return this.readBridgeSize();
      }
      this.getBridge(input);
    })
  },

  getBridge(input){
    const bridgeAnswer = BridgeMaker.makeBridge(input, BridgeRandomNumberGenerator.generate);
    answer = bridgeAnswer;
    this.readMoving(bridgeAnswer, 0);
  },

  /**
   * 사용자가 이동할 칸을 입력받는다.
   */
  readMoving(answer, move_cnt) {
    MissionUtils.Console.readLine(CONSOLELINE.MOVE_INPUT, (upOrdown) => {
      try{
        validation.checkCanMove(upOrdown);
      } catch(err){
        return this.readMoving(answer, move_cnt);
      }
      const gameLog = OutputView.printMap(answer, upOrdown);
      move_cnt += 1;
      this.restartOrSuccess(move_cnt, gameLog)
    })
  },

  restartOrSuccess(move_cnt, gameLog){
    if(this.restartCheck(move_cnt, gameLog)){
      this.readGameCommand();
    }
    if (this.SuccessCheck(move_cnt, gameLog)){
      MissionUtils.Console.close();
      //success - output 처리
    }
    else{
      this.readMoving(answer, move_cnt);
    }
  },

  /**
   * 사용자가 게임을 다시 시도할지 종료할지 여부를 입력받는다.
   */
  readGameCommand() {
    MissionUtils.Console.readLine(CONSOLELINE.RESTART_CHECK, (restart) => {
      try{
        validation.checkRestartOrNot(restart);
      } catch(err){
        return this.readGameCommand();
      }
      restart === 'R' ? this.readMoving(answer, 0) : MissionUtils.Console.close();
    })
  },

  restartCheck(cnt_move, gameLog){
    if (cnt_move == answer.length && gameLog[0][gameLog[0].length-1] !== 'O' && gameLog[1][gameLog[1].length-1] !== 'O'){
      bridgeGame.init();
      return true;
    }
    if (gameLog[0][gameLog[0].length-1] === 'X' || gameLog[1][gameLog[1].length-1] === 'X'){
      bridgeGame.init();
      return true;
    }
    return false;
  },

  SuccessCheck(cnt_move, gameLog){
    if (cnt_move == answer.length && gameLog[0][gameLog[0].length-1] !== 'X' && gameLog[1][gameLog[1].length-1] !== 'X'){
      return true;
    }
    return false;
  }
};

module.exports = InputView;
