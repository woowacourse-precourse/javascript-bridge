const { Random } = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/model/BridgeGame');

const mockRandoms = (numbers) => {
  Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickNumberInRange);
};

test('다리를 건너는 move 메서드가 userBridge의 command정보를 올바르게 저장하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);

  bridgeGame.move('U');

  expect(bridgeGame.userBridge.command).toEqual(['U']);
});

test('다리를 건너는 move 메서드가 userBridge의 up정보를 올바르게 저장하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);

  bridgeGame.move('U');

  expect(bridgeGame.userBridge.up).toEqual(['O']);
});

test('다리를 건너는 move 메서드가 userBridge의 down정보를 올바르게 저장하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);

  bridgeGame.move('U');

  expect(bridgeGame.userBridge.down).toEqual([' ']);
});

test('사용자가 현재까지 입력한 다리 정보가 정답인 다리와 같은지 비교하는 isRightSpace 메서드가 정삭 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1, 0]);
  const bridgeGame = new BridgeGame(4);
  bridgeGame.userBridge.command = ['U', 'D'];

  const value = bridgeGame.isRightSpace();

  expect(value).toEqual(true);
});

test('사용자의 다리 정보와 정답인 다리와 동일한지 확인하는 isEnd 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1, 0]);
  const bridgeGame = new BridgeGame(4);
  bridgeGame.userBridge.command = ['U', 'D', 'U', 'D'];

  const value = bridgeGame.isEnd();

  expect(value).toEqual(true);
});

test('사용자의 다리 정보를 바탕으로 다리 형식을 만드는 makeBridgeFormat 메서드가 정상 동작하는지 확인한다.', () => {
  mockRandoms([1, 0, 1]);
  const bridgeGame = new BridgeGame(3);
  bridgeGame.userBridge.up = ['O', ' ', ' '];
  bridgeGame.userBridge.down = [' ', 'O', 'X'];

  const value = bridgeGame.makeBridgeFormat();

  expect(value).toEqual({ upBridge: '[ O |   |   ]', downBridge: '[   | O | X ]' });
});

test('사용자가 게임을 다시 시도할 때 사용하는 retry 메서드가 정상 동작하는지 확인한다.', () => {
  const bridgeGame = new BridgeGame();

  const value = bridgeGame.retry('R');

  expect(value).toEqual(true);
});
