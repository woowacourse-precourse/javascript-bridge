const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');
const { createTokens, isCommandRetry } = require('../src/BridgeGame');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const { ERROR_MESSAGE } = require('../src/Constants/message');

describe('BridgeGame 클래스 테스트', () => {
  test('createTokens - 반환하는 배열 길이가 입력값과 같은지 검사', () => {
    // Given
    const size = 3;

    // When
    const tokenLength = createTokens(size, generate).length;

    // Then
    expect(tokenLength).toEqual(size);
  });

  test('createTokens - 반환하는 배열이 0 또는 1로만 이루어져 있는지 검사', () => {
    // Given
    const size = 5;

    // When
    const token = createTokens(size, generate);
    const binaryRegExp = /^[01]+$/;

    // Then
    token.forEach((token) => expect(binaryRegExp.test(token)).toBe(true));
  });

  test('createTokens - 올바른 토큰을 생성하는지 검사', () => {
    // Given
    const size = 4;
    const randomNumbers = [0, 1, 1, 0];

    // When
    const mockGenerator = [0, 1, 1, 0].reduce((acc, cur) => {
      return acc.mockReturnValueOnce(cur);
    }, jest.fn());
    const tokens = createTokens(size, mockGenerator);

    // Then
    expect(tokens).toEqual(randomNumbers);
  });

  test('move - 이동할 방향을 입력받고 올바르게 기록하는지 검사', () => {
    // Given
    const direction = 'U';
    const records = ['D', 'D'];

    // When
    const game = new BridgeGame();
    const result = game.move(direction, records);
    const nextRecords = ['D', 'D', 'U'];

    // Then
    expect(result).toEqual(nextRecords);
  });

  test('move - 잘못된 방향을 입력받을 경우 예외처리', () => {
    // Given
    const directionList = ['Z', '!', 3, 'UU', 'DU', 'UD', 'DD'];

    // When
    const game = new BridgeGame();

    // Then
    directionList.forEach((direction) => {
      expect(() => {
        game.move(direction);
      }).toThrow(ERROR_MESSAGE.unexpected_input);
    });
  });

  test('isSelectUpper - 유저 입력이 U일 때만 참값을 반환하는지 검사', () => {
    // Given
    const userDirectionList = ['U', 'D'];

    // When
    const isGoUpList = [true, false];

    // Then
    userDirectionList.forEach((userDirection, idx) => {
      const isGoUp = BridgeGame.isSelectUpper(userDirection);
      expect(isGoUp).toBe(isGoUpList[idx]);
    });
  });

  test('isSelectUpper - U, D 이외의 값이 입력되면 예외 처리', () => {
    // Given
    const userDirectionList = ['L', 'UU', 'UD', 'K', '3', '#!', 'uzz'];

    // Then
    userDirectionList.forEach((userDirection) => {
      expect(() => BridgeGame.isSelectUpper(userDirection)).toThrow(
        ERROR_MESSAGE.unexpected_input
      );
    });
  });

  test('isEndOfBridge - 다리의 끝에 도달하면 참값을 반환하는지 검사', () => {
    // Given
    const bridge = ['U', 'D', 'D', 'U'];
    const records = ['U', 'D', 'D', 'U'];

    // When
    const game = new BridgeGame();
    const isEndOfBridge = game.isEndOfBridge(bridge, records);

    // Then
    expect(isEndOfBridge).toBe(true);
  });

  test('isEndOfBridge - 경계값 검사, 아직 끝에 도달하지 않았을 때', () => {
    // Given
    const bridge = ['U', 'D', 'U'];
    const records = ['U', 'D'];

    // When
    const game = new BridgeGame();
    const isEndOfBridge = game.isEndOfBridge(bridge, records);

    // Then
    expect(isEndOfBridge).toBe(false);
  });

  test('IsCommandRetry - 커맨드에 맞게 올바른 값을 반환하는지 검사', () => {
    // Given
    const commands = ['R', 'Q'];

    // When
    const expected = commands.map((command) => isCommandRetry(command));
    const result = [true, false];

    // Then
    expect(expected).toStrictEqual(result);
  });

  test('isCommandRetry - 잘못된 커맨드가 입력되면 예외처리', () => {
    // Given
    const commands = ['D', 34, '!', 'U', 'RU', 'Qq', 'r', 'q'];

    // Then
    commands.forEach((command) => {
      expect(() => {
        console.log('isCommandRety', isCommandRetry(command));
      }).toThrow(ERROR_MESSAGE.unexpected_input);
    });
  });
});
