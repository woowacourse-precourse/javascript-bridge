const bridgeMaterialize = require('../src/utils/bridgeMaterialize');
const makePrintBridge = require('../src/utils/makePrintBridge');
const validCheck = require('../src/utils/validCheck');

describe('유틸 함수 동작 테스트', () => {
  test('다리 구체화 유틸함수 테스트', () => {
    expect(bridgeMaterialize(['U', 'D', 'D'])).toEqual([
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ]);
    expect(bridgeMaterialize(['U', 'D', 'U'])).toEqual([
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ]);
  });

  test('출력될 다리 제작 유틸함수 테스트', () => {
    expect(
      makePrintBridge(
        [
          ['O', ' ', 'O'],
          [' ', 'O', ' '],
        ],
        2,
        false
      )
    ).toEqual([
      ['O', ' ', ' '],
      [' ', 'O', 'X'],
    ]);

    expect(
      makePrintBridge(
        [
          ['O', ' ', 'O'],
          [' ', 'O', ' '],
        ],
        2,
        true
      )
    ).toEqual([
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ]);

    expect(
      makePrintBridge(
        [
          ['O', ' ', 'O', 'O'],
          [' ', 'O', ' ', ' '],
        ],
        3,
        false
      )
    ).toEqual([
      ['O', ' ', 'O', ' '],
      [' ', 'O', ' ', 'X'],
    ]);

    expect(
      makePrintBridge(
        [
          ['O', ' ', 'O', 'O'],
          [' ', 'O', ' ', ' '],
        ],
        3,
        true
      )
    ).toEqual([
      ['O', ' ', 'O', 'O'],
      [' ', 'O', ' ', ' '],
    ]);
  });

  test('다리 길이 입력값 검증 함수', () => {
    expect(validCheck.bridgeLength('5')).toBe(true);
    expect(validCheck.bridgeLength('21')).toBe(false);
    expect(validCheck.bridgeLength('a')).toBe(false);
  });

  test('위치 이동 입력값 검증 함수', () => {
    expect(validCheck.moveInput('U')).toBe(true);
    expect(validCheck.moveInput('D')).toBe(true);
    expect(validCheck.moveInput('1')).toBe(false);
    expect(validCheck.moveInput('u')).toBe(false);
    expect(validCheck.moveInput('d')).toBe(false);
  });

  test('재시작/종료 입력값 검증 함수', () => {
    expect(validCheck.quitInput('Q')).toBe(true);
    expect(validCheck.quitInput('R')).toBe(true);
    expect(validCheck.quitInput('1')).toBe(false);
    expect(validCheck.quitInput('q')).toBe(false);
    expect(validCheck.quitInput('r')).toBe(false);
  });
});
