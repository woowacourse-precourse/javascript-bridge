const { Random } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/model/BridgeGame');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

test('사용자가 현재까지 입력한 다리 정보가 정답인 다리와 같은지 비교하는 isCorrectSpace 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1, 0]);
  const bridgeGame = new BridgeGame(4);
  bridgeGame.move('U').move('D');

  const value = bridgeGame.isCorrectSpace();

  expect(value).toEqual(true);
});

test('사용자의 다리 정보와 정답인 다리가 똑같이졌는지 확인하는 isEnd 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);
  bridgeGame.move('U').move('D').move('U');

  const value = bridgeGame.isEnd();

  expect(value).toEqual(true);
});

test('사용자의 다리 정보를 바탕으로 다리 형식을 만드는 makeBridgeFormat 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);
  bridgeGame.move('U').move('D').move('D');

  const value = bridgeGame.makeBridgeFormat();

  expect(value).toEqual({ upBridge: '[ O |   |   ]', downBridge: '[   | O | X ]' });
});

test('사용자가 게임을 다시 시도할 때 사용하는 retry 메서드가 정상 동작하는지 확인한다.', () => {
  const bridgeGame = new BridgeGame();

  const value = bridgeGame.retry('R');

  expect(value).toEqual(true);
});

// 10줄 요구 사항에 따라 개행 삭제
test('결과값을 가져오는 getResult 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3).move('U').move('D').move('D');
  const value = bridgeGame.getResult();
  expect(value).toEqual({
    bridge: { upBridge: '[ O |   |   ]', downBridge: '[   | O | X ]' },
    result: '실패',
    count: 1,
  });
});
