const BridgeMapMaker = require('../src/domain/BridgeMapMaker');

describe('다리의 상태를 생성하는 객체 테스트', () => {
  test('이동한 블록들과 이동 성공 여부를 기반으로 다리의 상태를 생성한다.', () => {
    const moveHistory = [
      { block: 'U', isCorrect: true },
      { block: 'D', isCorrect: true },
      { block: 'U', isCorrect: false },
    ];

    const result = BridgeMapMaker.makeBridgeMap(moveHistory);

    expect(result).toEqual([
      ['O', ' ', 'X'],
      [' ', 'O', ' '],
    ]);
  });

  test('다리 일부분의 상태를 업데이트한다', () => {
    const partialMap = ['O'];
    const isCorrect = false;

    const result = BridgeMapMaker.update(partialMap, isCorrect);

    expect(result).toEqual(['O', 'X']);
  });
});
