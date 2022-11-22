const Path = require('../src/Path');
const { MOVING, MARKING } = require('../src/utils/constants');

describe('Path 클래스 테스트', () => {
  let path;
  beforeEach(() => {
    path = new Path();
  });

  const getClearCase = () => {
    const answer = ['D', 'U', 'U'];
    const resultMoveable = [true, true, true];

    const expectedPathMapU = [MARKING.EMPTY, MARKING.RIGHT, MARKING.RIGHT];
    const expectedPathMapD = [MARKING.RIGHT, MARKING.EMPTY, MARKING.EMPTY];

    const expectedPathMap = {
      [MOVING.U]: expectedPathMapU,
      [MOVING.D]: expectedPathMapD,
    };
    return { answer, expectedPathMap, resultMoveable };
  };

  const getFailCase = () => {
    const answer = ['D', 'U', 'D'];
    const resultMoveable = [true, true, false];

    const expectedPathMapU = [MARKING.EMPTY, MARKING.RIGHT, MARKING.EMPTY];
    const expectedPathMapD = [MARKING.RIGHT, MARKING.EMPTY, MARKING.WRONG];

    const expectedPathMap = {
      [MOVING.U]: expectedPathMapU,
      [MOVING.D]: expectedPathMapD,
    };
    return { answer, expectedPathMap, resultMoveable };
  };

  const expectPathMap = (resultPathMap, expectedPathMap, idx) => {
    const expectedU = expectedPathMap[MOVING.U].slice(0, idx + 1);
    const expectedD = expectedPathMap[MOVING.D].slice(0, idx + 1);

    expect(resultPathMap[MOVING.U]).toEqual(expectedU);
    expect(resultPathMap[MOVING.D]).toEqual(expectedD);
  };

  it('경로 마킹 테스트 / 전체 이동 성공 케이스', () => {
    const { answer, expectedPathMap, resultMoveable } = getClearCase();

    answer.map((position, idx) => {
      const resultPathMap = path.move(position, resultMoveable[idx]);
      expectPathMap(resultPathMap, expectedPathMap, idx);
    });
  });

  it('경로 마킹 테스트 / 이동 실패 케이스', () => {
    const { answer, expectedPathMap, resultMoveable } = getFailCase();

    answer.map((position, idx) => {
      const resultPathMap = path.move(position, resultMoveable[idx]);
      expectPathMap(resultPathMap, expectedPathMap, idx);
    });
  });
});
