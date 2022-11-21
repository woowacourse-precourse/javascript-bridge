class Validator {
  static validateNumber(value) {
    const regExp = /[0-9]/;
    const matchArr = value.match(regExp);
    if (!matchArr || matchArr.length !== value.length) {
      return false;
    }
    return true;
  }

  static validateNumberInRange(value) {
    const num = parseInt(value, 10);
    if (num > 20 || num < 3) {
      return false;
    }
    return true;
  }

  static validateUpDown(value) {
    if (value !== 'U' && value !== 'D') {
      return false;
    }
    return true;
  }

  static validateGameCommand(value) {
    if (value !== 'R' && value !== 'Q') {
      return false;
    }
    return true;
  }
}

module.exports = Validator;
