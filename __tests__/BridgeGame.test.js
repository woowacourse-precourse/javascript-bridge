const BridgeGame = require('../src/BridgeGame');

describe('숫자값 문자열 치환 기능 테스트', () => {
  test('메소드 이름은 "replaceString"로 정의된다.', () => {
    const METHOD_NAME = 'replaceString';

    expect(BridgeGame.replaceString.name).toEqual(METHOD_NAME);
  });

  test('요소가 0인 경우 "D"로 치환한다.', () => {
    const EXPECTED = 0;
    const RECEIVED = 'D';

    expect(BridgeGame.replaceString(EXPECTED)).toEqual(RECEIVED);
  });
});
