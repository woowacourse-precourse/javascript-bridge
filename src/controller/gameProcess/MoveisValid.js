const { readMoving } = require('../../InputView');
const { catchMoveError } = require('../../model/CatchError');

const MoveValidControl = () => {
  let usermove = readMoving();
  if (catchMoveError(usermove) === false) {
    usermove = readMoving();
  }
  return usermove;
};

Object.freeze(MoveValidControl);

module.exports = MoveValidControl;
