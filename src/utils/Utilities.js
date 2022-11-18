const BRIDGE = require("./Constants");

const Utilities = {
  isSuccess(status) {
    if (status === true) {
      return '성공';
    }
    return '실패';
  },

  convertResultToString(arr) {
    let resultStringArr = [['['], ['[']];
    arr.forEach((item) => {
      resultStringArr = ResultStringConverter.checkUpDown(item, resultStringArr);
    });

    const convertedResultArr = ResultStringConverter.convertLast(resultStringArr);
    const resultString = ResultStringConverter.convertToString(convertedResultArr);

    return resultString;
  },
};

const ResultStringConverter = {
  checkUpDown(item, resultStringArr) {
    const isMovable = item[1];
    if (item[0] === BRIDGE.letter.up) {
      resultStringArr = this.convertUp(resultStringArr, isMovable);
    }
    if (item[0] === BRIDGE.letter.down) {
      resultStringArr = this.convertDown(resultStringArr, isMovable);
    }

    return resultStringArr;
  },

  convertUp(resultStringArr, isMovable) {
    if (isMovable) {
      resultStringArr[0].push(...['O', '|']);
      resultStringArr[1].push(...[' ', '|']);
    } else {
      resultStringArr[0].push(...['X', '|']);
      resultStringArr[1].push(...[' ', '|']);
    }
    return resultStringArr;
  },

  convertDown(resultStringArr, isMovable) {
    if (isMovable) {
      resultStringArr[0].push(...[' ', '|']);
      resultStringArr[1].push(...['O', '|']);
    } else {
      resultStringArr[0].push(...[' ', '|']);
      resultStringArr[1].push(...['X', '|']);
    }
    return resultStringArr;
  },

  convertLast(resultStringArr) {
    resultStringArr[0][resultStringArr[0].length - 1] = ']';
    resultStringArr[1][resultStringArr[1].length - 1] = ']';

    return resultStringArr;
  },

  convertToString(resultStringArr) {
    const resultString = [];
    resultString.push(resultStringArr[0].join(' '));
    resultString.push(resultStringArr[1].join(' '));

    return resultString;
  },
};

module.exports = Utilities;
