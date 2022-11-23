/* eslint max-lines-per-function: 0 */
const BridgeMaker = require('../../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../../src/BridgeRandomNumberGenerator');
const BridgeInteractor = require('../../src/domain/usecases/BridgeInteractor');

const getBridgeInteractor = () => {
  const bridgeInteractor = new BridgeInteractor();
  BridgeMaker.makeBridge = jest.fn().mockImplementation(() => ['U', 'D', 'D']);
  bridgeInteractor.makeBridge(3);
  return bridgeInteractor;
};
describe('다리 테스트', () => {
  test('다리를 생성한다.', () => {
    const bridgeInteractor = new BridgeInteractor();
    BridgeMaker.makeBridge = jest.fn().mockImplementation(() => ['U', 'D', 'D']);

    bridgeInteractor.makeBridge(3);
    expect(bridgeInteractor.getSize()).toEqual(2);
    expect(bridgeInteractor.getBridge(0)).toEqual(['U']);
    expect(bridgeInteractor.getBridge(1)).toEqual(['U', 'D']);
    expect(bridgeInteractor.getBridge(2)).toEqual(['U', 'D', 'D']);
  });

  test('현재 위치를 돌려받는다', () => {
    const bridgeInteractor = getBridgeInteractor();
    expect(bridgeInteractor.getSpace(0)).toEqual('U');
    expect(bridgeInteractor.getSpace(1)).toEqual('D');
    expect(bridgeInteractor.getSpace(2)).toEqual('D');
  });

  test('다리의 크기가 3미만이면 에러를 던진다', () => {
    const bridgeInteractor = new BridgeInteractor();
    expect(() => bridgeInteractor.makeBridge(3)).not.toThrow();
    expect(() => bridgeInteractor.makeBridge(2)).toThrow();
  });

  test('다리의 크기가 20을 초과하면 에러를 던진다', () => {
    const bridgeInteractor = new BridgeInteractor();
    expect(() => bridgeInteractor.makeBridge(20)).not.toThrow();
    expect(() => bridgeInteractor.makeBridge(21)).toThrow();
  });
});
