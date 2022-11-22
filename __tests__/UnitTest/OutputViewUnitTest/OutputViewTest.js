const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('../../../src/view/OutputView');
const { CURRENT_MAP } = require('../../../src/constants/game.constants');

const getLogSpy = () => {
  const logSpy = jest.spyOn(Console, 'print');
  logSpy.mockClear();
  return logSpy;
};

describe('게임 화면 출력 테스트', () => {
  test('플레이어 이동 경로 현황 출력 테스트', () => {
    const currentMap = [
      ['O', 'O', ' '],
      [' ', ' ', 'O'],
    ];
    const result = '[ O | O |   ]\n[   |   | O ]';

    const logSpy = getLogSpy();

    OutputView.printMap(currentMap);
    expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
  });
  test('최종 게임 결과 출력 테스트', () => {
    const currentMap = [
      ['O', 'O', ' '],
      [' ', ' ', 'X'],
    ];
    const gameResult = '실패';
    const gameCount = 1;
    const results = ['최종 게임 결과', '[ O | O |   ]\n[   |   | X ]', '게임 성공 여부'];

    const logSpy = getLogSpy();

    OutputView.printResult(currentMap, gameResult, gameCount);
    results.forEach((result) => {
      expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(result));
    });
  });
});
