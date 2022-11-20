const { validateBridgeSize } = require('../src/Validation');
const { ERROR } = require('../src/constants');

describe('Validation 테스트', () => {
  test('잘못된 다리 길이 입력한 경우 에러처리', () => {
    const values = [
      //숫자가 아닐 경우 (ex: 알파벳, 한글, 특수문자 등 불가)
      'v',
      '오',
      '#',
      // 숫자가 다리의 길이가 될 수 없는 경우 (ex: 0, 음수, 소수 등 불가)
      '0',
      '-5',
      '5.5',
      // 숫자가 3~20까지 범위를 초과할 경우 (ex: 2, 21 등 불가)
      '2',
      '21',
    ];

    values.forEach((value) => {
      expect(() => {
        validateBridgeSize(value);
      }).toThrow(ERROR.ENTER_VALID_BRIDGE_SIZE);
    });
  });
});
