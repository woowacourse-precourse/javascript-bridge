/* eslint-disable */

const { MOVE_RESULT } = require('../src/constant/Constant');
const BridgeDrawer = require('../src/domain/BridgeDrawer');
const Trimmer = require('../src/Trimmer');

describe('[BridgeDrawer] 주어진 입력에 맞는 다리가 반환되어야 한다.', () => {
  test.each([
    {
      bridge: ['U'],
      drawSize: 1,
      roundResult: MOVE_RESULT.CLEAR,
      answer: Trimmer.templateTrim(`
        [ O ]
        [   ]
      `),
    },
    {
      bridge: ['D'],
      drawSize: 1,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [ X ]
        [   ]
      `),
    },
    {
      bridge: ['U', 'D'],
      drawSize: 2,
      roundResult: MOVE_RESULT.CLEAR,
      answer: Trimmer.templateTrim(`
        [ O |   ]
        [   | O ]
      `),
    },
    {
      bridge: ['D', 'U'],
      drawSize: 2,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [   |   ]
        [ O | X ]
      `),
    },
    {
      bridge: ['U', 'U', 'D', 'D', 'U', 'D', 'D'],
      drawSize: 5,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [ O | O |   |   |   ]
        [   |   | O | O | X ]
      `),
    },
    {
      bridge: ['U', 'U', 'U', 'U', 'U'],
      drawSize: 5,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [ O | O | O | O |   ]
        [   |   |   |   | X ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'D'],
      drawSize: 5,
      roundResult: MOVE_RESULT.OK,
      answer: Trimmer.templateTrim(`
        [   |   |   |   |   ]
        [ O | O | O | O | O ]
      `),
    },
    {
      bridge: [
        'D',
        'U',
        'D',
        'U',
        'U',
        'D',
        'U',
        'D',
        'D',
        'U',
        'D',
        'D',
        'U',
        'U',
        'D',
        'U',
        'U',
        'D',
        'U',
        'D',
      ],
      drawSize: 20,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [   | O |   | O | O |   | O |   |   | O |   |   | O | O |   | O | O |   | O | X ]
        [ O |   | O |   |   | O |   | O | O |   | O | O |   |   | O |   |   | O |   |   ]
      `),
    },
    {
      bridge: [
        'D',
        'U',
        'D',
        'U',
        'U',
        'D',
        'U',
        'D',
        'D',
        'U',
        'D',
        'D',
        'U',
        'U',
        'D',
        'U',
        'U',
        'D',
        'U',
        'D',
      ],
      drawSize: 15,
      roundResult: MOVE_RESULT.OK,
      answer: Trimmer.templateTrim(`
        [   | O |   | O | O |   | O |   |   | O |   |   | O | O |   ]
        [ O |   | O |   |   | O |   | O | O |   | O | O |   |   | O ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'U', 'U', 'U', 'D', 'D', 'U'],
      drawSize: 10,
      roundResult: MOVE_RESULT.CLEAR,
      answer: Trimmer.templateTrim(`
        [   |   |   |   | O | O | O |   |   | O ]
        [ O | O | O | O |   |   |   | O | O |   ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'U', 'U', 'U', 'D', 'D', 'U'],
      drawSize: 7,
      roundResult: MOVE_RESULT.FAIL,
      answer: Trimmer.templateTrim(`
        [   |   |   |   | O | O |   ]
        [ O | O | O | O |   |   | X ]
      `),
    },
  ])('', ({ bridge, drawSize, roundResult, answer }) => {
    const bridgeDrawer = new BridgeDrawer();
    const testResult = bridgeDrawer.getBridgeDrawingUsingResult(bridge, drawSize, roundResult);
    expect(testResult).toEqual(answer);
  });
});
