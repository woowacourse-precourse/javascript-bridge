const BridgeRepository = require('../../src/repository/BridgeRepository');
const BridgeDirection = require('../../src/service/domain/BridgeDirection');
const { MODEL_KEY } = require('../../src/utils/constants');

describe('(domain) BridgeDirection 클래스', () => {
  test('(U키 입력) 데이터가 잘 저장되는 지 확인', () => {
    const repo = new BridgeRepository();
    const direction = new BridgeDirection({ input: 'U', repo: repo });

    direction.store();

    expect(repo.read(MODEL_KEY.userBridge)).toEqual(['U']);
  });

  test('(D키 입력) 데이터가 잘 저장되는 지 확인', () => {
    const repo = new BridgeRepository();
    const direction = new BridgeDirection({ input: 'D', repo: repo });

    direction.store();

    expect(repo.read(MODEL_KEY.userBridge)).toEqual(['D']);
  });
});
