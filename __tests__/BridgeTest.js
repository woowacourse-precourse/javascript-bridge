const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');

describe('다리 길이 입력값 유효성 검사', () => {
  test('다리 길이는 3이상 20이하의 숫자이다.', () => {
    const app = new App();
    const testBridgeSize = ['', 2, 'ab', '100', 100, '03'];
    testBridgeSize.forEach((element) => {
      expect(() => app.isValidBridgeSize(element)).toThrow();
    });
  });
});

describe('move 유효성 검사', () => {
  test('입력이 U,D가 아닌 경우 throw error.', () => {
    const bridgeGame = new BridgeGame();
    const testInput = ['r', '100', 33, 'ㅎㅎ', ' '];
    testInput.forEach((element) => {
      expect(() => bridgeGame.move(element)).toThrow();
    });
  });
});
