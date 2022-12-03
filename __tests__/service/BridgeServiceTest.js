const BridgeService = require('../../src/service/BridgeGame');

const MissionUtils = require('@woowacourse/mission-utils');

const { GAME_RESULT_STATE } = require('../../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

const startService = (bridgeLength) => {
  const randoms = [1, 1, 1];
  mockRandoms(randoms);

  const bridgeService = new BridgeService();
  bridgeService.start(bridgeLength);

  return bridgeService;
};

const makeInput = ({ input, moveResult, gameResult }) => {
  return {
    input,
    moveResult,
    gameResult,
    service: startService('3'),
  };
};

describe('랜덤 브릿지와 유저 브릿지 비교 테스트', () => {
  test.each([
    [
      makeInput({
        input: ['U', 'D'],
        moveResult: [
          ['O', ' '],
          [' ', 'X'],
        ],
        gameResult: {
          result: GAME_RESULT_STATE.fail,
          tryCount: 1,
        },
      }),
    ],
    [
      makeInput({
        input: ['U', 'U', 'D'],
        moveResult: [
          ['O', 'O', ' '],
          [' ', ' ', 'X'],
        ],
        gameResult: {
          result: GAME_RESULT_STATE.fail,
          tryCount: 1,
        },
      }),
    ],
    [
      makeInput({
        input: ['U', 'U'],
        moveResult: [
          ['O', 'O'],
          [' ', ' '],
        ],
        gameResult: {
          result: GAME_RESULT_STATE.try,
          tryCount: 1,
        },
      }),
    ],
    [
      makeInput({
        input: ['U', 'U', 'U'],
        moveResult: [
          ['O', 'O', 'O'],
          [' ', ' ', ' '],
        ],
        gameResult: {
          result: GAME_RESULT_STATE.success,
          tryCount: 1,
        },
      }),
    ],
  ])(
    '다리 길이 입력 시 시작데이터가 잘 만들어지는 지 확인',
    ({ input, gameResult, moveResult, service }) => {
      input.forEach((updown) => {
        service.recordMove(updown);
      });

      expect(service.getMoveResult()).toEqual(moveResult);
      expect(service.getGameResult()).toEqual(gameResult);
    }
  );
});
