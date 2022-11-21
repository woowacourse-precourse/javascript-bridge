const { convertToUpDown } = require('../src/Converter');
const { BRIDGE_MSG } = require('../src/Constant');

describe('변환자 테스트', () => {
  test('1을 U로, 0을 D로 변환한다.', () => {
    const ZERO = 0;
    const ONE = 1;
    expect(convertToUpDown(ZERO)).toEqual(BRIDGE_MSG.downward);
    expect(convertToUpDown(ONE)).toEqual(BRIDGE_MSG.upward);
  });
});
