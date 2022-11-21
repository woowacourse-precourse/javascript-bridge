const {
  OUTPUT: { MAP_DIVIDE_LAST, MAP_DIVIDE_NOT_LAST, MAP_BLANK, MAP_LOCATION },
  KEYWORD: { SUCCESS_JUMP, FALI_JUMP },
} = require("../constants/index.js");

const Message = class {
  static mapMessage(isPass, isLocation, isLast) {
    const divide = isLast ? MAP_DIVIDE_LAST : MAP_DIVIDE_NOT_LAST;
    if (isLocation) return MAP_BLANK + divide;
    return (
      (isPass ? MAP_LOCATION(SUCCESS_JUMP) : MAP_LOCATION(FALI_JUMP)) + divide
    );
  }
};

module.exports = Message;
