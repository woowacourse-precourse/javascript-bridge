/* eslint max-lines-per-function: 0 */
const OutputView = require('../src/OutputView');

describe('mapListToString 함수 검사', () => {
  test('배열로 저장된 map을 출력 형식에 맞춘 문자열로 변환한다.', () => {
    const mapString = OutputView.mapListToString(['O', ' ', 'X']);
    expect(mapString).toEqual('[ O |   | X ]');
  });
});
