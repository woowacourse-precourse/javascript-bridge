const { readMoving } = require('../../view/InputView');
const { catchMoveError } = require('../../model/CatchError');

const MoveValidControl = () => {
  let usermove = readMoving();
  while (!catchMoveError(usermove)) {
    usermove = readMoving();
  }
  return usermove;
};

Object.freeze(MoveValidControl);

module.exports = MoveValidControl;
