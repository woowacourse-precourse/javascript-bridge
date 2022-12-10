const { INPUT_ERROR } = require('../constants/error.constants');
const InputValidator = require('../validators/InputValidator');

describe('재시작, 종료 테스트', () => {
  test('재시작, 종료는 대문자 "R" 또는 "Q"로 입력한다.', () => {
    const input = 'r';
    expect(() => {
      InputValidator.isRestartQuit(input);
    }).toThrow(INPUT_ERROR.GAME_RESTART_IS_R_OR_Q);
  });
});
