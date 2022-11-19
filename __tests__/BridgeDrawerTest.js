/* eslint-disable */

const BridgeDrawer = require('../src/domain/BridgeDrawer');
const Trimmer = require('../src/Trimmer');

describe('[BridgeDrawer] 주어진 입력에 맞는 다리가 반환되어야 한다.', () => {
  test.each([
    {
      bridge: ['U'],
      drawSize: 1,
      isPlayerSucceed: true,
      answer: Trimmer.templateTrim(`
        [ O ]
        [   ]
      `),
    },
    {
      bridge: ['D'],
      drawSize: 1,
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [   ]
        [ X ]
      `),
    },
    {
      bridge: ['U', 'D'],
      drawSize: 2,
      isPlayerSucceed: true,
      answer: Trimmer.templateTrim(`
        [ O |   ]
        [   | O ]
      `),
    },
    {
      bridge: ['D', 'U'],
      drawSize: 2,
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [   | X ]
        [ O |   ]
      `),
    },
    {
      bridge: ['U', 'U', 'D', 'D', 'U', 'D', 'D'],
      drawSize: 5,
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [ O | O |   |   | X ]
        [   |   | O | O |   ]
      `),
    },
    {
      bridge: ['U', 'U', 'U', 'U', 'U'],
      drawSize: 5,
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [ O | O | O | O | X ]
        [   |   |   |   |   ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'D'],
      drawSize: 5,
      isPlayerSucceed: true,
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
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [   | O |   | O | O |   | O |   |   | O |   |   | O | O |   | O | O |   | O |   ]
        [ O |   | O |   |   | O |   | O | O |   | O | O |   |   | O |   |   | O |   | X ]
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
      isPlayerSucceed: true,
      answer: Trimmer.templateTrim(`
        [   | O |   | O | O |   | O |   |   | O |   |   | O | O |   ]
        [ O |   | O |   |   | O |   | O | O |   | O | O |   |   | O ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'U', 'U', 'U', 'D', 'D', 'U'],
      drawSize: 10,
      isPlayerSucceed: true,
      answer: Trimmer.templateTrim(`
        [   |   |   |   | O | O | O |   |   | O ]
        [ O | O | O | O |   |   |   | O | O |   ]
      `),
    },
    {
      bridge: ['D', 'D', 'D', 'D', 'U', 'U', 'U', 'D', 'D', 'U'],
      drawSize: 7,
      isPlayerSucceed: false,
      answer: Trimmer.templateTrim(`
        [   |   |   |   | O | O | X ]
        [ O | O | O | O |   |   |   ]
      `),
    },
  ])('', ({ bridge, drawSize, isPlayerSucceed, answer }) => {
    const bridgeDrawer = new BridgeDrawer();
    const testResult = bridgeDrawer.getBridgeDrawingUsingResult(bridge, drawSize, isPlayerSucceed);
    expect(testResult).toEqual(answer);
  });
});
