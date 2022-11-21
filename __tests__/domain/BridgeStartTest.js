const MissionUtils = require('@woowacourse/mission-utils');

const BridgeRepository = require('../../src/repository/BridgeRepository');
const BridgeStart = require('../../src/service/domain/BridgeStart');
const { MODEL_KEY } = require('../../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const makeRepo = () => {
  const repo = new BridgeRepository();
  repo.create();

  return repo;
};

const makeInput = ({ input, result }) => {
  mockRandoms(Array(input).fill(0));

  return {
    input,
    repo: makeRepo(),
    result
  };
};

describe('(domain) BridgeStart 클래스', () => {
  test.each([
    [
      makeInput({
        input: 3,
        result: { randomBridge: ['D', 'D', 'D'], userBridge: [], tryCount: 1 }
      })
    ],
    [
      makeInput({
        input: 4,
        result: {
          randomBridge: ['D', 'D', 'D', 'D'],
          userBridge: [],
          tryCount: 1
        }
      })
    ]
  ])(
    '다리 길이 입력 시 시작데이터가 잘 만들어지는 지 확인',
    ({ input, repo, result }) => {
      const start = new BridgeStart({ input, repo });

      start.store();

      expect(repo.read(MODEL_KEY.randomBridge)).toEqual(result.randomBridge);
      expect(repo.read(MODEL_KEY.userBridge)).toEqual(result.userBridge);
      expect(repo.read(MODEL_KEY.tryCount)).toEqual(result.tryCount);
    }
  );
});
