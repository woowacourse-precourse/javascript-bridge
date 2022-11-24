const { makeMapArray } = require('../src/util/MapMaker');

describe('MapMaker test', () => {
  test.each([
    [['U', 'U', 'U'], ['U', 'U', 'U'], [[' ', ' ', ' '], ['O', 'O', 'O']]],
    [['U', 'U', 'D'], ['U', 'U', 'U'], [[' ', ' ', 'X'], ['O', 'O', ' ']]],
    [['U', 'U'], ['U', 'U', 'U'], [[' ', ' '], ['O', 'O']]],
    [['D'], ['U', 'U', 'U'], [['X'], [' ']]],
  ])('making map test', (userPath, bridge, map) => {
    const m = makeMapArray(userPath, bridge);
    expect(m).toEqual(map);
  });
});
