/**
 * print할 수 있는 형태의 배열로 파싱해주는 유틸메서드
 * @param {array} bridge
 * @param {String} state
 * @param {boolean} correct
 */

const makePrintBridge = (bridge, state, correct) => {
  let [top, bottom] = bridge.slice();
  top = top.slice(0, state + 1);
  bottom = bottom.slice(0, state + 1);
  if (!correct) {
    top[state] = top[state] === ' ' ? 'X' : ' ';
    bottom[state] = bottom[state] === ' ' ? 'X' : ' ';
  }
  return [top, bottom];
};

// console.log(
//   makePrintBridge(
//     [
//       ['O', ' ', 'O'],
//       [' ', 'O', ' '],
//     ],
//     2,
//     false
//   )
// );

module.exports = makePrintBridge;
