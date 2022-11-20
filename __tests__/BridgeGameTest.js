const { Console } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/BridgeGame');

afterEach(() => {
  Console.close();
});

describe('BridgeGame 클래스의 stackOfUserMovingInput() 메서드 테스트', () => {
  test('this.userInput 멤버변수에 쌓아줄 입력값이 잘 들어가는지 확인', () => {
    const bridge = new BridgeGame();
    const userInput = 'D';
    bridge.move(userInput);
    const result = 'D';
    expect(...bridge.userInput).toContain(result);
  });
});

describe('bridgeGame 클래스의 bridgeCloseConverter() 메서드 테스트', () => {
  test('배열의 마지막값이 "|" 일때 "]" 로 바뀌는지 확인', () => {
    const bridgeGame = new BridgeGame();
    const lastString = ['|'];
    const convertedLastString = [']'];
    expect(bridgeGame.bridgeCloseConverter(lastString)).toEqual(
      convertedLastString,
    );
  });
  test.each([['a'], ['@'], [']'], [2]])(
    '배열의 마지막값이 "|"가 아닐때 "]" 로 바뀌지 않는지 확인',
    input => {
      const bridgeGame = new BridgeGame();
      const lastString = input;
      const convertedLastString = [']'];
      expect(bridgeGame.bridgeCloseConverter(lastString)).toEqual(
        expect.not.arrayContaining(convertedLastString),
      );
    },
  );
  test.failing.each([['|']])(
    '옳은값을 넣었을때 테스트가 실패하는지 test.failing 테스트',
    input => {
      const bridgeGame = new BridgeGame();
      const lastString = input;
      const convertedLastString = [']'];
      expect(bridgeGame.bridgeCloseConverter(lastString)).toEqual(
        expect.not.arrayContaining(convertedLastString),
      );
    },
  );
});
