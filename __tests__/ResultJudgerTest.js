/* eslint-disable */

const { MOVE_RESULT } = require('../src/constant/Constant');
const ResultJudger = require('../src/domain/ResultJudger');

describe('[ResultJudger] 마지막 다리가 다른 경우, 결과가 FAIL이어야 한다.', () => {
  test.each([
    {
      bridge: ['U'],
      bridgeCrossCount: 1,
      movingDirection: 'D',
      answer: MOVE_RESULT.FAIL,
    },
    {
      bridge: ['U', 'D', 'D'],
      bridgeCrossCount: 1,
      movingDirection: 'D',
      answer: MOVE_RESULT.FAIL,
    },
    {
      bridge: ['U', 'D', 'D'],
      bridgeCrossCount: 3,
      movingDirection: 'U',
      answer: MOVE_RESULT.FAIL,
    },
    {
      bridge: ['D', 'D', 'U', 'U', 'D', 'U', 'U'],
      bridgeCrossCount: 5,
      movingDirection: 'U',
      answer: MOVE_RESULT.FAIL,
    },
    {
      bridge: ['D', 'D', 'U', 'U', 'D', 'U', 'U'],
      bridgeCrossCount: 7,
      movingDirection: 'D',
      answer: MOVE_RESULT.FAIL,
    },
    {
      bridge: [
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
      ],
      bridgeCrossCount: 20,
      movingDirection: 'U',
      answer: MOVE_RESULT.FAIL,
    },
  ])('', ({ bridge, bridgeCrossCount, movingDirection, answer }) => {
    const resultJudger = new ResultJudger();
    const testResult = resultJudger.getRoundResult(bridge, bridgeCrossCount, movingDirection);
    expect(testResult).toEqual(answer);
  });
});

describe('[ResultJudger] 마지막 다리가 같고, 다리를 다 건너지 못 한 경우 결과가 OK이어야 한다.', () => {
  test.each([
    {
      bridge: ['U', 'D'],
      bridgeCrossCount: 1,
      movingDirection: 'U',
      answer: MOVE_RESULT.OK,
    },
    {
      bridge: [
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
      ],
      bridgeCrossCount: 10,
      movingDirection: 'D',
      answer: MOVE_RESULT.OK,
    },
    {
      bridge: [
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
      ],
      bridgeCrossCount: 19,
      movingDirection: 'D',
      answer: MOVE_RESULT.OK,
    },
    {
      bridge: [
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
      ],
      bridgeCrossCount: 14,
      movingDirection: 'U',
      answer: MOVE_RESULT.OK,
    },
  ])('', ({ bridge, bridgeCrossCount, movingDirection, answer }) => {
    const resultJudger = new ResultJudger();
    const testResult = resultJudger.getRoundResult(bridge, bridgeCrossCount, movingDirection);
    expect(testResult).toEqual(answer);
  });
});

describe('[ResultJudger] 마지막 다리가 같고, 다리를 다 건넌 경우 결과가 CLEAR이어야 한다.', () => {
  test.each([
    {
      bridge: ['U', 'D'],
      bridgeCrossCount: 2,
      movingDirection: 'D',
      answer: MOVE_RESULT.CLEAR,
    },
    {
      bridge: [
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
        'U',
        'U',
        'U',
        'U',
        'U',
        'D',
        'D',
        'D',
        'D',
        'D',
      ],
      bridgeCrossCount: 20,
      movingDirection: 'D',
      answer: MOVE_RESULT.CLEAR,
    },
    {
      bridge: ['U', 'U', 'U', 'U', 'U', 'D', 'D', 'D', 'D', 'D', 'U', 'U', 'U', 'U', 'U'],
      bridgeCrossCount: 15,
      movingDirection: 'U',
      answer: MOVE_RESULT.CLEAR,
    },
  ])('', ({ bridge, bridgeCrossCount, movingDirection, answer }) => {
    const resultJudger = new ResultJudger();
    const testResult = resultJudger.getRoundResult(bridge, bridgeCrossCount, movingDirection);
    expect(testResult).toEqual(answer);
  });
});
