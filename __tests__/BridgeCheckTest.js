const BridgeService = require('../src/service/BridgeService');

const MissionUtils = require('@woowacourse/mission-utils');

const { GAME_RESULT_STATE } = require('../src/utils/constants');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickNumberInRange
  );
};

describe('랜덤 브릿지와 유저 브릿지 비교 테스트', () => {
  test('(결과:실패 - 유저브릿지["U","D"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const randoms = ['1', '1', '1'];
    mockRandoms(randoms);

    const bridgeService = new BridgeService();

    bridgeService.start('3');
    bridgeService.recordMove('U');
    bridgeService.recordMove('D');

    const moveResult = bridgeService.getMoveResult();
    const gameResult = bridgeService.getGameResult();

    expect(moveResult).toEqual([
      ['O', ''],
      ['', 'X']
    ]);
    expect(gameResult).toEqual({
      result: GAME_RESULT_STATE.fail,
      tryCount: 1
    });
  });

  test('(결과:실패 - 유저브릿지["U","U","D"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const randoms = ['1', '1', '1'];
    mockRandoms(randoms);

    const bridgeService = new BridgeService();

    bridgeService.start('3');

    bridgeService.recordMove('U');
    bridgeService.recordMove('U');
    bridgeService.recordMove('D');

    const moveResult = bridgeService.getMoveResult();
    const gameResult = bridgeService.getGameResult();

    expect(moveResult).toEqual([
      ['O', 'O', ''],
      ['', '', 'X']
    ]);

    expect(gameResult).toEqual({
      result: GAME_RESULT_STATE.fail,
      tryCount: 1
    });
  });

  test('(결과:계속 시도 - 유저브릿지["U","U"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const randoms = ['1', '1', '1'];
    mockRandoms(randoms);

    const bridgeService = new BridgeService();

    bridgeService.start('3');
    bridgeService.recordMove('U');
    bridgeService.recordMove('U');

    const moveResult = bridgeService.getMoveResult();
    const gameResult = bridgeService.getGameResult();

    expect(moveResult).toEqual([
      ['O', 'O'],
      ['', '']
    ]);

    expect(gameResult).toEqual({
      result: GAME_RESULT_STATE.try,
      tryCount: 1
    });
  });

  test('(결과:성공 - 유저브릿지["U","U","U"], 랜덤브릿지["U","U","U"],)) 입력 테스트', () => {
    const randoms = ['1', '1', '1'];
    mockRandoms(randoms);

    const bridgeService = new BridgeService();

    bridgeService.start('3');
    bridgeService.recordMove('U');
    bridgeService.recordMove('U');
    bridgeService.recordMove('U');

    const moveResult = bridgeService.getMoveResult();
    const gameResult = bridgeService.getGameResult();

    expect(moveResult).toEqual([
      ['O', 'O', 'O'],
      ['', '', '']
    ]);

    expect(gameResult).toEqual({
      result: GAME_RESULT_STATE.success,
      tryCount: 1
    });
  });
});
