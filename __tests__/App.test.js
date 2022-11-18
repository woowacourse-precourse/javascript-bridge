const MissionUtils = require('@woowacourse/mission-utils');

const App = require('../src/App');

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
});
