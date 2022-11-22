const MapMaker = require('../src/MapMaker');

describe('MapMaker 테스트', () => {
  const commands = ['U', 'D', 'D', 'U', 'D'];
  const getUserInputResult = (result) => (i) => ({ command: commands[i], result: result[i] });

  test('이동불가능한 입력이 있는 경우 테스트', () => {
    const result = [true, false];
    const map = MapMaker.create(
      result.length,
      getUserInputResult(result),
    );

    expect(map).toBe(['[ O |   ]', '[   | X ]'].join('\n'));
  });

  test('모두 이동한 경우 테스트', () => {
    const result = Array.from({ length: commands.length }).fill(true);
    const map = MapMaker.create(
      result.length,
      getUserInputResult(result),
    );

    expect(map).toBe(['[ O |   |   | O |   ]', '[   | O | O |   | O ]'].join('\n'));
  });
});

describe('BridgeGame테스트', () => {
  let bridgeGame;

  beforeEach(() => {
    bridgeGame = new BridgeGame();
  });
  test('숫자 입력에 알맞은 다리 생성 테스트', () => {
    const userInputs = ['3', '5', '10'];
    const result = [];

    userInputs.forEach((input) => {
      bridgeGame.createBridge(input);
      result.push(bridgeGame.bridgeStore.isSameWithBridgeLength(Number(input)));
    });
    expect(result.every((el) => el)).toBeTruthy();
  });
});
