const App = require('../src/App');

describe('다리 생성 메서드 테스트', () => {
  test('메소드 이름은 "generateBridge"로 정의된다.', () => {
    const app = new App();
    const METHOD_NAME = 'generateBridge';

    expect(app.generateBridge.name).toEqual(METHOD_NAME);
  });
});
