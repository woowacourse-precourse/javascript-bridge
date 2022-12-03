const BridgeRepository = require('../../src/repository/BridgeRepository');
const BridgeDirection = require('../../src/service/domain/BridgeDirection');
const { MODEL_KEY } = require('../../src/utils/constants');

const makeRepo = () => {
  const repo = new BridgeRepository();
  repo.create();

  return repo;
};

const makeInput = ({ input, result }) => {
  return {
    input,
    repo: makeRepo(),
    result
  };
};

describe('(domain) BridgeDirection 클래스', () => {
  test.each([
    [makeInput({ input: 'U', result: ['U'] })],
    [makeInput({ input: 'D', result: ['D'] })]
  ])('U | D 키 입력 시 데이터 저장 확인', ({ input, repo, result }) => {
    const direction = new BridgeDirection({ input, repo });

    direction.store();

    expect(repo.read(MODEL_KEY.userBridge)).toEqual(result);
  });
});
