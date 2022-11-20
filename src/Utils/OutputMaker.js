const { INPUT_CHAR } = require('../Constants/InputValues');
const { STATUS } = require('../Constants/BridgeStatus');

const OutputMaker = {
  /**
   * 생성된 진행상황 배열을 반환하는 메서드
   */
  makeOutput(input, pass) {
    const upAndDownArray = this.upAndDown(input, pass);
    const splitUpAndDownArray = this.splitUpAndDown(upAndDownArray);
    const result = [
      [splitUpAndDownArray[0].join().replace(/,/gi, STATUS.seperator)],
      [splitUpAndDownArray[1].join().replace(/,/gi, STATUS.seperator)],
    ];
    return result;
  },

  /**
   * 플레이어 입력에 따른 진행상황을 생성하는 메서드
   */
  upAndDown(input, pass) {
    const upAndDownArray = [];
    const current = input.length - 1;
    input.forEach((value, index) => {
      if (value === INPUT_CHAR.up && index === current && !pass) upAndDownArray.push([STATUS.fail, STATUS.pass]);
      else if (value === INPUT_CHAR.up) upAndDownArray.push([STATUS.correct, STATUS.pass]);
      if (value === INPUT_CHAR.down && index === current && !pass) upAndDownArray.push([STATUS.pass, STATUS.fail]);
      else if (value === INPUT_CHAR.down) upAndDownArray.push([STATUS.pass, STATUS.correct]);
    });
    return upAndDownArray;
  },

  /**
   * 생성된 진행상황 배열을 위아래로 각각 분할하는 메서드
   */
  splitUpAndDown(array) {
    const splitUpAndDownArray = [[], []];
    array.forEach((value) => {
      splitUpAndDownArray[0].push(value[0]);
      splitUpAndDownArray[1].push(value[1]);
    });
    return splitUpAndDownArray;
  },
};

module.exports = OutputMaker;
