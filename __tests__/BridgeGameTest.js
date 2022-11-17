const MissionUtils = require('@woowacourse/mission-utils');
const App = require('../src/App');
const BridgeGame = require('../src/BridgeGame');
const { createTokens, canMoveNext } = require('../src/BridgeGame');
const { makeBridge } = require('../src/BridgeMaker');
const BridgeMaker = require('../src/BridgeMaker');
const { generate } = require('../src/BridgeRandomNumberGenerator');
const BridgeRandomNumberGenerator = require('../src/BridgeRandomNumberGenerator');
const { ERROR_MESSAGES } = require('../src/constant/message');
const OutputView = require('../src/OutputView');

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

  test('canMoveNext - 다음 방향으로 움직일 수 있는지 검사', () => {
    // Given
    const userDirectionList = ['U', 'D', 'U', 'D'];
    const isMovable = [true, false, false, true];

    // When
    const nextDirectionList = ['U', 'U', 'D', 'D'];

    // Then
    userDirectionList.forEach((userDirection, idx) => {
      const canMove = BridgeGame.canMoveNext(
        userDirection,
        nextDirectionList[idx]
      );
      expect(canMove).toBe(isMovable[idx]);
    });
  });

  test('canMoveNext - U, D 이외 다른 값이 들어가면 예외 처리', () => {
    // Given
    const userDirection = 'L';

    // When
    const nextDirection = 'R';

    // Then
    expect(BridgeGame.canMoveNext(userDirection, nextDirection)).toThrow(
      ERROR_MESSAGES.unexpected_input
    );
  });

  test('isGoUp - 유저 입력이 U일 때만 참값을 반환하는지 검사', () => {
    // Given
    const userDirectionList = ['U', 'D'];

    // When
    const isGoUpList = [true, false];

    // Then
    userDirectionList.forEach((userDirection, idx) => {
      const isGoUp = BridgeGame.isGoUp(userDirection);
      expect(isGoUp).toBe(isGoUpList[idx]);
    });
  });

  test('isGoUp - U, D 이외의 값이 입력되면 예외 처리', () => {
    // Given
    const userDirectionList = ['L', 'UU', 'UD', 'K', '3', '#!', 'uzz'];

    // Then
    userDirectionList.forEach((userDirection) => {
      expect(() => BridgeGame.isGoUp(userDirection)).toThrow(
        ERROR_MESSAGES.unexpected_input
      );
    });
  });

  test('makeNewDirectionRecord - 올바른 이동 기록을 반환하는지 검사', () => {
    // Given
    const userDirection = 'D';
    const records = ['U', 'D'];

    // When
    const newRecords = BridgeGame.makeNewDirectionRecord(
      userDirection,
      records
    );
    const nextRecords = ['U', 'D', 'D'];
    // Then
    expect(newRecords).toEqual(nextRecords);
  });
});
