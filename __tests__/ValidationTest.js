const { isCollectBridgeLength } = require('../src/utils/validator');

describe('다리길이 입력 테스트', () => {
  test.each([['1'], ['-11'], ['어머'], [''], ['/n']])('3이상 20이하가 아닌 수를 입력했을 때', (input) => {
    expect(() => {
      isCollectBridgeLength(input);
    }).toThrow('[ERROR]');
  });
});
