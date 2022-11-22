const Bridge = require('../src/Bridge');
const bridge = new Bridge();

describe('다리 생성 테스트', () => {
  test('다리의 길이를 입력하면 입력한 길이 만큼의 다리가 생성된다.', () => {
    expect(() => {
      const size = 5;
      const generatedBridge = bridge
        .make(size)
        .expect(generatedBridge.length)
        .toBe(size);
    });
  });
});
