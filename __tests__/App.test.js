const MissionUtils = require('@woowacourse/mission-utils');

const App = require('../src/App');

const NUMBER_ERROR_TEXT = '[ERROR] 전달된 인수는 숫자 타입이 아닙니다.';

afterAll(() => {
  MissionUtils.Console.close();
});

describe('다리 생성 메서드 테스트', () => {
  test('메소드 이름은 "generateBridge"로 정의된다.', () => {
    const app = new App();
    const METHOD_NAME = 'generateBridge';

    expect(app.generateBridge.name).toEqual(METHOD_NAME);
  });

  test('"3"을 전달하면 길이가 3인 배열을 반환한다.', () => {
    const app = new App();
    const EXPECTED = '3';
    const RECEIVED = 3;

    expect(app.generateBridge(EXPECTED)).toHaveLength(RECEIVED);
  });

  test('인자가 숫자로 변환이 불가능하면 예외를 발생한다.', () => {
    const app = new App();
    const EXPECTED = NaN;

    expect(() => {
      app.generateBridge(EXPECTED);
    }).toThrow(NUMBER_ERROR_TEXT);
  });
});
