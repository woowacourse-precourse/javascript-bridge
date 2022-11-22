const { mockRandoms } = require('../../test/utils');

const BridgeMaker = require('../../src/BridgeMaker');

describe('다리 생성 객체', () => {
  test('다리 생성 테스트', () => {
    mockRandoms([[1], [1], [0], [0]]);

    expect(BridgeMaker.makeBridge(4)).toEqual(['D', 'D', 'U', 'U']);
  });
});
