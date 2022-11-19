const CustomError = require('../CustomError');

const MoveValidation = {
  validate: (input) => {
    if (input !== 'U' && input !== 'D') throw new CustomError('입력은 U 또는 Q여야 합니다.');
  },
};

module.exports = MoveValidation;
