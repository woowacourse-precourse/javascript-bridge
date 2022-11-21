const Builder = require('../src/Builder.js');
const Bridge = require('../src/Bridge');

describe('Builder 클래스 테스트', () => {
  test('buildBridge메서드의 return값은 Bridge클래스의 인스턴스여야 한다.', () => {
    const builder = new Builder();
    const input = ['D', 'U', 'D'];

    const result = builder.buildBridge(input);

    expect(result).toBeInstanceOf(Bridge);
  });
});
