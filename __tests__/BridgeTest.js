const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const { BRIDGE_SIZE_ERROR } = require('../src/constants');

describe('다리 길이 입력값 유효성 검사', () => {
  test('다리 길이는 3이상 20이하의 숫자이다.', () => {
    const app = new App();
    const testBridgeSize = ['', 2, 'ab', '100', 100];
    testBridgeSize.forEach((element) => {
      expect(() => app.isValidBridgeSize(element)).toThrow();
    });
  });
});
