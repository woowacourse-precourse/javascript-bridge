const ResultStringConverter = {
  convertResult(arr) {
    let resultStringArr = [['['], ['[']];
    arr.forEach((item) => {
      resultStringArr = this.checkUpDown(item, resultStringArr);
    });

    const convertedResultArr = this.convertLast(resultStringArr);
    const resultString = this.convertToString(convertedResultArr);

    return resultString;
  },

  checkUpDown(item, resultStringArr) {
    const isMovable = item[1];
    if (item[0] === 'U') {
      resultStringArr = this.convertUp(resultStringArr, isMovable);
    }
    if (item[0] === 'D') {
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

module.exports = ResultStringConverter;
