const Validate = {
  isNumber(input) {
    if (typeof +input !== 'number') {
      throw new Error('번호입력바람');
    }
    if (!Number.isInteger(+input)) {
      throw new Error('번호입력좀.');
    }
    if (Number.isNaN(+input)) {
      throw new Error('번오입력하라고');
    }
  },

  isRigthSize(input) {
    if (+input < 3) {
      throw new Error('너무작은사이즈');
    }
    if (+input > 20) {
      throw new Error('너무 큰사이즈');
    }
  },

  bridgeSize(input) {
    this.isNumber(input);
    this.isRigthSize(input);
  },

  way(way) {
    if (way !== 'U' && way !== 'D') {
      throw new Error('방향이상함');
    }
  },
};

module.exports = Validate;
