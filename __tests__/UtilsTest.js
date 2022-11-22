const { MSG } = require('../src/utils/messages');
const { validator } = require('../src/utils/helper');

describe('유틸 함수 테스트', () => {
  test('다리 길이 유효성 검사 테스트', () => {
    const input = 1;
    expect(() => {
      validator.bridgeSize(input);
    }).toThrow(MSG.ERROR.BRIDGE_RANGE);
  });

  test('다리 길이 유효성 검사 테스트', () => {
    const input = 's';
    expect(() => {
      validator.bridgeSize(input);
    }).toThrow(MSG.ERROR.BRIDGE_TYPE);
  });

  test('사용자 이동 유효성 검사 테스트', () => {
    const input = 'X';
    expect(() => {
      validator.direction(input);
    }).toThrow(MSG.ERROR.DIRECTION_TYPE);
  });

  test('사용자 게임 진행 여부 유효성 검사 테스트', () => {
    const input = 'X';
    expect(() => {
      validator.command(input);
    }).toThrow(MSG.ERROR.COMMAND_TYPE);
  });
});
