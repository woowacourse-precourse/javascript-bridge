const {
  OUTPUT: { MAP_BLANK, MAP_MIDDLE_DIVIDE, MAP_DIVIDE },
  KEYWORD: { SUCCESS_JUMP, FALI_JUMP },
  SIZE: { DIRECTION_SIZE },
  HASH,
} = require("../constants/index.js");

const Message = class {
  static getLineMessage(isPass, isLocation) {
    if (isLocation) return MAP_BLANK;
    return isPass ? SUCCESS_JUMP : FALI_JUMP;
  }

  static getMapMessage(directions, bridge) {
    return Array.from({ length: DIRECTION_SIZE }, (_, direction) =>
      directions.reduce((map, move, location) => {
        const isPass = move === bridge[location];
        const isLocation = move === HASH[direction];
        return (map += Message.getLineMessage(isPass, isLocation));
      }, "")
    )
      .map((message) => message.split("").join(MAP_MIDDLE_DIVIDE))
      .map((message) => MAP_DIVIDE(message));
  }
};

module.exports = Message;
