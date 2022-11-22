const BridgeMap = require('../src/BridgeMap');

const answer = ['U', 'D', 'D', 'U', 'U'];
const mockUserMove = ['U', 'D', 'U'];
const expectedResult = [
  [['O'], [' ']],
  [
    ['O', ' '],
    [' ', 'O'],
  ],
  [
    ['O', ' ', 'X'],
    [' ', 'O', ' '],
  ],
];

describe('다리 지도 만들기 테스트', () => {
  test('들어오는 입력값에 맞게 지도 생성', () => {
    const userMoves = [];
    const moveGenerator = mockUserMove.reduce((acc, move) => {
      return acc.mockReturnValueOnce(move);
    }, jest.fn());

    for (let i = 0; i < mockUserMove.length; i += 1) {
      const move = moveGenerator();
      userMoves.push(move);
      const map = BridgeMap.generate(answer, userMoves);
      expect(map).toEqual(expectedResult[i]);
    }
  });
});
