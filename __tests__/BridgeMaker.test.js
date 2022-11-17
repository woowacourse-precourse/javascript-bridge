const MissionUtils = require('@woowacourse/mission-utils');

const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';

afterAll(() => {
  MissionUtils.Console.close();
});

describe('다리의 길이를 입력 받아서 다리를 생성해주는 함수 테스트', () => {
  const { generate } = BridgeRandomNumberGenerator;

  test('메소드 이름은 "makeBridge"로 정의된다.', () => {
    const METHOD_NAME = 'makeBridge';

    expect(BridgeMaker.makeBridge.name).toEqual(METHOD_NAME);
  });

  test('첫번째 인수로 3을 전달하면 길이가 3인 배열을 반환한다.', () => {
    const EXPECTED = 3;
    const RECEIVED = 3;

    expect(BridgeMaker.makeBridge(EXPECTED, generate)).toHaveLength(RECEIVED);
  });

  test('문자열로 이루어진 배열을 반환한다.', () => {
    const EXPECTED = 3;

    expect(BridgeMaker.makeBridge(EXPECTED, generate).every((v) => typeof v === 'string')).toBeTruthy();
  });

  test('전달받는 첫 번째 인자가 숫자가 아니라면 예외를 발생한다.', () => {
    const EXPECTED = NaN;

    expect(() => {
      BridgeMaker.makeBridge(EXPECTED, generate);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});
