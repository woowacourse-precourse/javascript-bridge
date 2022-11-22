const BridgeMap = require('../../../src/model/bridge/BridgeMap');

describe('[BridgeMap] 주어진 인자값에 대해 다리와 성공 여부를 리턴한다.', () => {
  test.each([
    {
      bridge: ['U'],
      position: 1,
      commandList: ['U'],
      passedResult: true,
      bridgeResult: '[ O ]\n[   ]',
    },
    {
      bridge: ['D'],
      position: 1,
      commandList: ['U'],
      passedResult: false,
      bridgeResult: '[ X ]\n[   ]',
    },
    {
      bridge: ['U', 'U'],
      position: 1,
      commandList: ['D'],
      passedResult: false,
      bridgeResult: '[   ]\n[ X ]',
    },
    {
      bridge: ['U', 'U', 'D', 'D'],
      position: 3,
      commandList: ['U', 'U', 'U'],
      passedResult: false,
      bridgeResult: '[ O | O | X ]\n[   |   |   ]',
    },
    {
      bridge: ['U', 'U', 'D', 'D'],
      position: 3,
      commandList: ['U', 'U', 'D'],
      passedResult: true,
      bridgeResult: '[ O | O |   ]\n[   |   | O ]',
    },
    {
      bridge: ['U', 'U', 'D', 'D'],
      position: 4,
      commandList: ['U', 'U', 'D', 'U'],
      passedResult: false,
      bridgeResult: '[ O | O |   | X ]\n[   |   | O |   ]',
    },
    {
      bridge: ['U', 'U', 'D', 'D'],
      position: 4,
      commandList: ['U', 'U', 'D', 'D'],
      passedResult: true,
      bridgeResult: '[ O | O |   |   ]\n[   |   | O | O ]',
    },
  ])('', ({ bridge, position, commandList, passedResult, bridgeResult }) => {
    const { isPassed, bridgeMap } = new BridgeMap({ bridge, position, commandList }).getBridgeMap();
    console.log(bridgeMap);
    expect(bridgeMap).toEqual(bridgeResult);
    expect(isPassed).toEqual(passedResult);
  });
});
