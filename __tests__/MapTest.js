const ProgressMap = require('../src/Models/ProgressMap');

const mockData = {
  gameProgress: [
    { select: 'D', alive: true },
    { select: 'D', alive: true },
    { select: 'U', alive: false },
  ],
  playCount: 2,
  gameResult: '실패',
};

describe('progressMap 생성 테스트', () => {
  test('데이터가 주어진 경우 Map 생성', () => {
    const progressMap = new ProgressMap();
    const { gameProgress } = mockData;
    const currentMap = progressMap.createMap(gameProgress);

    const upRow = currentMap.up
    const downRow = currentMap.down
    
    expect(`${upRow},${downRow}`).toEqual('[   |   | X ],[ O | O |   ]');
  });
});
