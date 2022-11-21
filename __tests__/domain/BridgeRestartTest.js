const BridgeRepository = require('../../src/repository/BridgeRepository');
const BridgeRestart = require('../../src/service/domain/BridgeRestart');

const { MODEL_KEY } = require('../../src/utils/constants');

const makeRepo = () => {
  const repo = new BridgeRepository();
  repo.create();

  return repo;
};

const makeInput = ({ restart, result }) => {
  return {
    restart,
    repo: makeRepo(),
    result
  };
};

describe('(domain) BridgeRestart 클래스', () => {
  test.each([
    [
      makeInput({
        restart: 2,
        result: { userBridge: [], tryCount: 3 }
      })
    ],
    [
      makeInput({
        restart: 5,
        result: { userBridge: [], tryCount: 6 }
      })
    ]
  ])(
    '다리 길이 입력 시 시작데이터가 잘 만들어지는 지 확인',
    ({ restart, repo, result }) => {
      const bridgeRestart = new BridgeRestart({ repo });

      Array.from({ length: restart }, () => bridgeRestart.store());

      expect(repo.read(MODEL_KEY.userBridge)).toEqual(result.userBridge);
      expect(repo.read(MODEL_KEY.tryCount)).toEqual(result.tryCount);
    }
  );
});
