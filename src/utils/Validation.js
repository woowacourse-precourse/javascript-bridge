const {DEFAULTS, ERRORLINE} = require('./Constants');
const MissionUtils = require('@woowacourse/mission-utils');
const bridgeGame = require('../model/BridgeGame');
const onlyNmbr = /^[0-9]+$/;

class Validation{
  checkBridgeSize(input){
    if (input < DEFAULTS.START_RANGE_cnt || input > DEFAULTS.END_RANGE_cnt || !(onlyNmbr).test(input)){
      MissionUtils.Console.print(ERRORLINE.BRIDGE_LENGTH_ERROR);
      throw new Error(ERRORLINE.BRIDGE_LENGTH_ERROR);
    }
  }

  checkCanMove(input){
    if (input !== DEFAULTS.UP && input !== DEFAULTS.DOWN){
      MissionUtils.Console.print(ERRORLINE.MOVE_ERROR);
      throw new Error(ERRORLINE.MOVE_ERROR);
    }
  }

  checkRestartOrNot(input){
    if (input !== DEFAULTS.RESTART && input !== DEFAULTS.QUIT){
      MissionUtils.Console.print(ERRORLINE.RESTART_ERROR);
      throw new Error(ERRORLINE.RESTART_ERROR);
    }
  }

  isRestartRequired(cnt_move, gameLog, answer){
    if (cnt_move == answer.length && gameLog[0][gameLog[0].length-1] !== 'O' && gameLog[1][gameLog[1].length-1] !== 'O'){
      bridgeGame.retry();
      return true;
    }
    if (gameLog[0][gameLog[0].length-1] === 'X' || gameLog[1][gameLog[1].length-1] === 'X'){
      bridgeGame.retry();
      return true;
    }
    return false;
  }

  isSuccess(cnt_move, gameLog, answer){
    if (cnt_move == answer.length && gameLog[0][gameLog[0].length-1] !== 'X' && gameLog[1][gameLog[1].length-1] !== 'X'){
      return true;
    }
    return false;
  }
}

const validation = new Validation();
module.exports = validation;