const Move = require('../src/Model/Move');

describe('이동 테스트', () => {
  test('이동 결과 계산', () => {
    const currentPositions = ['U', 'D'];
    const directions = ['U', 'U'];
    const results = ['O', 'X'];

    results.forEach((result, index) => {
      expect(
        Move.calculateMoveResult(currentPositions[index], directions[index])
      ).toEqual(result);
    });
  });
});
