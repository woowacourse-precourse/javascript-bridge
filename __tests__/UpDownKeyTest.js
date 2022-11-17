const UpDownKey = require('../src/domain/UpDownKey');

describe('이동할 칸 입력 테스트', () => {
  test('(U or R 제외 문자 입력(오류) - "a") 입력 테스트', () => {
    const input = 'a';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.getValidateData()).toThrow('[ERROR]');
  });

  test('(U or R 제외 문자 입력(오류) - "1") 입력 테스트', () => {
    const input = '1';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.getValidateData()).toThrow('[ERROR]');
  });

  test('(U or R 제외 문자 입력(오류) - "u") 입력 테스트', () => {
    const input = 'u';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.getValidateData()).toThrow('[ERROR]');
  });

  test('(U or R 제외 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'U';
    const upDowonKey = new UpDownKey(input);

    expect(upDowonKey.getValidateData()).toEqual('U');
  });

  test('(U or R 제외 문자 입력(정상) - "R") 입력 테스트', () => {
    const input = 'R';
    const upDowonKey = new UpDownKey(input);

    expect(upDowonKey.getValidateData()).toEqual('R');
  });
});
