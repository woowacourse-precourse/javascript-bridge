const UpDownKey = require('../src/service/domain/UpDownKey');
const { MODEL_KEY } = require('../src/utils/constants');

describe('이동할 칸 입력 테스트', () => {
  test('(U or D 제외 문자 입력(오류) - "a") 입력 테스트', () => {
    const input = 'a';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.doAction()).toThrow('[ERROR]');
  });

  test('(U or D 제외 문자 입력(오류) - "1") 입력 테스트', () => {
    const input = '1';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.doAction()).toThrow('[ERROR]');
  });

  test('(U or D 제외 문자 입력(오류) - "u") 입력 테스트', () => {
    const input = 'u';
    const upDowonKey = new UpDownKey(input);

    expect(() => upDowonKey.doAction()).toThrow('[ERROR]');
  });

  test('(U or R 제외 문자 입력(정상) - "U") 입력 테스트', () => {
    const input = 'U';
    const upDowonKey = new UpDownKey(input);

    upDowonKey.doAction();

    const userBridge = upDowonKey.getModelFor(MODEL_KEY.userBridge);

    expect(userBridge).toEqual(['U']);
  });

  test('(U or R 제외 문자 입력(정상) - "D") 입력 테스트', () => {
    const input = 'D';
    const upDowonKey = new UpDownKey(input);

    upDowonKey.doAction();

    const userBridge = upDowonKey.getModelFor(MODEL_KEY.userBridge);

    expect(userBridge).toEqual(['D']);
  });
});
