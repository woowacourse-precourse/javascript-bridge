const MissionUtils = require('@woowacourse/mission-utils');

const BridgeRepository = require('../../src/repository/BridgeRepository');
const BridgeFinalResult = require('../../src/service/domain/BridgeFinalResult');
const { MODEL_KEY, GAME_RESULT_STATE } = require('../../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const makeRepo = (number) => {
  const repo = new BridgeRepository();
  repo.create(number);

  return repo;
};

const makeInput = ({ makeDataFn, result }) => {
  return {
    makeDataFn,
    repo: makeRepo(3),
    result
  };
};

describe('(domain) BridgeUserMapTest 클래스', () => {
  const randoms = [0, 0, 0];
  mockRandoms(randoms);

  test.each([
    [
      makeInput({
        makeDataFn: (repo) => {
          const addData = (newData) => {
            return [...repo.read(MODEL_KEY.userBridge), newData];
          };

          repo.update(MODEL_KEY.userBridge, addData('D'));
          repo.update(MODEL_KEY.userBridge, addData('D'));
          repo.update(MODEL_KEY.userBridge, addData('D'));

          return repo;
        },
        result: {
          result: GAME_RESULT_STATE.success,
          tryCount: 1
        }
      })
    ],
    [
      makeInput({
        makeDataFn: (repo) => {
          const addData = (newData) => {
            return [...repo.read(MODEL_KEY.userBridge), newData];
          };

          repo.update(MODEL_KEY.userBridge, addData('D'));
          repo.update(MODEL_KEY.userBridge, addData('U'));

          return repo;
        },
        result: {
          result: GAME_RESULT_STATE.fail,
          tryCount: 1
        }
      })
    ],
    [
      makeInput({
        makeDataFn: (repo) => {
          const addData = (newData) => {
            return [...repo.read(MODEL_KEY.userBridge), newData];
          };

          repo.update(MODEL_KEY.userBridge, addData('D'));
          repo.update(MODEL_KEY.userBridge, addData('D'));

          return repo;
        },
        result: {
          result: GAME_RESULT_STATE.try,
          tryCount: 1
        }
      })
    ]
  ])(
    '다리 길이 입력 시 시작데이터가 잘 만들어지는 지 확인',
    ({ makeDataFn, repo, result }) => {
      const finalResult = new BridgeFinalResult({ repo: makeDataFn(repo) });
      const testData = finalResult.getOutput();

      expect(testData).toEqual(result);
    }
  );
});
