const Map = require('../src/Model/Map');

const table = [
  [true, 'U', [['O'], [' ']]],
  [
    true,
    'D',
    [
      ['O', ' '],
      [' ', 'O'],
    ],
  ],
  [
    false,
    'U',
    [
      ['O', ' ', 'X'],
      [' ', 'O', ' '],
    ],
  ],
];

describe('다리 이동 결과 테스트', () => {
  const map = new Map();

  test.each(table)('다리 이동 결과 테스트', (isMovable, movingCommand, expected) =>
    expect(map.record(isMovable, movingCommand)).toEqual(expected),
  );
});
