const bridgeMaterialize = require('../src/utils/bridgeMaterialize');

describe('유틸 함수 동작 테스트', () => {
  test('다리 구체화 함수 테스트', () => {
    expect(bridgeMaterialize(['U', 'D', 'D'])).toEqual([
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ]);
    expect(bridgeMaterialize(['U', 'D', 'U'])).toEqual([
      ['O', ' ', 'O'],
      [' ', 'O', ' '],
    ]);
  });
});
