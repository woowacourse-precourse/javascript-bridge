const MissionUtils = require('@woowacourse/mission-utils');
const BridgeGame = require('../src/model/BridgeGame');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('브릿지 정보 만들기', () => {
  test('칸 이동할 수 있는지 판단 - U 이동가능', () => {
    mockRandoms(['1', '0', '1', '1', '0']);
    const gameReport = new BridgeGame();
    gameReport.makeBridgeInfo(5);
    gameReport.round.trun = 1;
    const result = gameReport.move('U');
    expect(result).toEqual([
      [
        {
          move: 'U',
          moveable: true,
        },
      ],
      { sucess: false, process: true },
    ]);
  });

  test('칸 이동할 수 있는지 판단 - U 이동불가능', () => {
    mockRandoms(['1', '0', '1', '0']);
    const gameReport = new BridgeGame();
    gameReport.makeBridgeInfo(4);
    gameReport.round.trun = 0;
    const result = gameReport.move('U');

    expect(result).toEqual([
      [
        {
          move: 'U',
          moveable: false,
        },
      ],
      { sucess: false, process: false },
    ]);
  });

  test('칸 이동할 수 있는지 판단 - D 이동가능', () => {
    mockRandoms(['1', '1', '1', '0']);
    const gameReport = new BridgeGame();
    gameReport.makeBridgeInfo(4);
    gameReport.round.trun = 2;
    const result = gameReport.move('D');

    expect(result).toEqual([
      [
        {
          move: 'D',
          moveable: true,
        },
      ],
      { sucess: false, process: false },
    ]);
  });

  test('칸 이동할 수 있는지 판단 - D 이동불가능', () => {
    mockRandoms(['0', '1', '1', '0']);
    const gameReport = new BridgeGame();
    gameReport.makeBridgeInfo(4);
    gameReport.round.trun = 0;
    const result = gameReport.move('D');

    expect(result).toEqual([
      [
        {
          move: 'D',
          moveable: false,
        },
      ],
      { sucess: false, process: false },
    ]);
  });
});

describe('재시도', () => {
  test('재시도 선택할 때 라운드 정보 재설정되는지 확인', () => {
    const gameReport = new BridgeGame();
    gameReport.retry();
    const result = gameReport.round;
    expect({ trun: -1, total: 2 }).toEqual(result);
  });

  test('재시도 선택할 때 라운드 정보 재설정되는지 확인', () => {
    const gameReport = new BridgeGame();
    gameReport.round = { trun: -1, total: 5 };
    gameReport.retry();
    const result = gameReport.round;
    expect({ trun: -1, total: 6 }).toEqual(result);
  });
});
