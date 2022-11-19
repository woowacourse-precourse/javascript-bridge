const BridgeGame = require("../src/bridge/BridgeGame.js");
const BridgeMaker = require('../src/BridgeMaker.js');
const Validator = require('../src/bridge/Validator.js');

const bridge = new BridgeGame();

describe('Test domain logic of the Bridge Game', () => {
  test('Bridge setting test', () => {
    const randomNumbers = ["1", "0", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const newBridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(newBridge).toEqual(["U", "D", "U"]);
  });

  test('Check current position of user', () => {
    bridge.move('U');
    bridge.move('D');
    expect(bridge.currentPos).toEqual(['U', 'D']);
  });

  test('Check whether bridge has been reset', () => {
    bridge.retry()
    expect(bridge.currentPos).toEqual([]);
    expect(bridge.isPlaying).toBe(true);
    expect(bridge.attempt).toBe(2);
  });

  test('Validate bridge size input', () => {
    try {
      Validator.validateBridgeSize(1);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test('Validate direction input', () => {
    try {
      Validator.validateDirection(2);
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });

  test('Validate restart input', () => {
    try {
      Validator.validateRestartInput('V');
    } catch (e) {
      expect(e).toBeInstanceOf(Error);
    }
  });
});