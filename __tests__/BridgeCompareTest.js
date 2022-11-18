const BridgeGame = require('../src/BridgeGame');
const BridgeMessage = require('../src/MESSAGES/BridgeMessage');

const bridgegame = new BridgeGame();

test('사용자가 입력한 칸이 위이고, 이용가능한 다리가 위인 경우', () => {
  expect(bridgegame.move('U', 'U')).toBe(true);
  expect(bridgegame.move('U', 'D')).toBe(false);
  expect(bridgegame.move('D', 'U')).toBe(false);
  expect(bridgegame.move('D', 'D')).toBe(true);
});

test('사용자가 입력한 칸과 이용가능한 다리에 따른 출력 형식 테스트', () => {
  expect(bridgegame.moveCaseAction('U', 'U')).toBe(BridgeMessage.UPUP_MESSAGE);
  expect(bridgegame.moveCaseAction('U', 'D')).toBe(
    BridgeMessage.UPDOWN_MESSAGE
  );
  expect(bridgegame.moveCaseAction('D', 'D')).toBe(
    BridgeMessage.DOWNDOWN_MESSAGE
  );
  expect(bridgegame.moveCaseAction('D', 'U')).toBe(
    BridgeMessage.DOWNUP_MESSAGE
  );
});
