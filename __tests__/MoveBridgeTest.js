const { INPUT_ERROR } = require('../constants/error.constants');
const InputValidator = require('../validators/InputValidator');

describe('다리 이동 테스트', () => {
  test('이동할 칸은 대문자 "U"나 "D"로 입력한다.', () => {
    const input = 'd';
    expect(() => {
      InputValidator.isUpDown(input);
    }).toThrow(INPUT_ERROR.MOVE_INPUT_IS_U_OR_D);
  });
});