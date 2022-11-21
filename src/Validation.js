const Constant = require('./constant/constant');

/**
 * @param size: 검증하고자 하는 bridge size
 * @returns {boolean} : valid하면 true, invalid하면 false
 */
function validateBridgeLength(size){
    return !isNaN(Number(size)) && Number(size) >= Constant.CONSTANT.BRIDGE_FIRST && Number(size) <= Constant.CONSTANT.BRIDGE_END;
}

function validationMove(move){
    return Constant.MOVE.includes(move);
}

module.exports = {validateBridgeLength, validationMove}
