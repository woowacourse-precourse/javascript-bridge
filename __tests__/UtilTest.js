const bridgeMaterialize = require('../src/utils/bridgeMaterialize');
const makePrintBridge = require('../src/utils/makePrintBridge');

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
});
