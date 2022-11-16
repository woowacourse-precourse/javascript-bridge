const {DEFAULTS, ERRORLINE} = require('./Constants');

const onlyNmbr = /^[0-9]+$/;

class Validation{
  checkBridgeSize(input){
    if (input < DEFAULTS.START_RANGE_cnt || input > DEFAULTS.END_RANGE_cnt || !(onlyNmbr).test(input)){
      throw new Error(ERRORLINE.BRIDGE_LENGTH_ERROR);
    }
  }

  checkCanMove(input){
    if (input !== DEFAULTS.UP || input !== DEFAULTS.DOWN){
      throw new Error(ERRORLINE.MOVE_ERROR);
    }
  }
}

const validation = new Validation();
module.exports = validation;