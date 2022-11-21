const Message = require("./Message");

const readBridgeSizeValidate = (number) => {
  //1e1와 같은 숫자를 방지하기 위한 validation
  number.split("").map((elem) => {
    if (isNaN(elem)) throw new Error(Message.ERROR.IS_NAN);
  });
  if (number < 3 || number > 20) throw new Error(Message.ERROR.OUT_OF_RANGE);
};

module.exports = { readBridgeSizeValidate };
