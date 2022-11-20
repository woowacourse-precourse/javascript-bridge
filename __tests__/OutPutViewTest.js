const { describe, expect, test } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('../src/OutputView');

const printSpy = jest.spyOn(Console, 'print');

describe('printMap 메서드 테스트', () => {
  test('Console.print가 총 2번 호출된다.', () => {
    OutputView.printMap([
      ['O', ' '],
      [' ', 'X'],
    ]);

    expect(printSpy).toHaveBeenCalledTimes(2);

    printSpy.mockClear();
  });

  test.each([
    [[['O'], []], '[ O ]'],
    [[['O', ' ', 'O', 'O', ' '], []], '[ O |   | O | O |   ]'],
    [[['O', ' ', 'O', ' ', ' '], []], '[ O |   | O |   |   ]'],
    [[['O', ' ', 'O', ' ', ' ', 'X'], []], '[ O |   | O |   |   | X ]'],
  ])(
    '위쪽 다리 건너기 결과 출력 테스트',
    (bridgeCrossingResult, printResult) => {
      OutputView.printMap(bridgeCrossingResult);

      expect([...printSpy.mock.calls][0].join('')).toEqual(printResult);

      printSpy.mockClear();
    }
  );

  test.each([
    [[[], [' ', 'X']], '[   | X ]'],
    [[[], [' ', 'O', 'O']], '[   | O | O ]'],
    [[[], [' ', 'O', 'O', ' ']], '[   | O | O |   ]'],
    [[[], [' ', 'O', 'O', ' ', 'X']], '[   | O | O |   | X ]'],
  ])(
    '아래쪽 다리 건너기 결과 출력 테스트',
    (bridgeCrossingResult, printResult) => {
      OutputView.printMap(bridgeCrossingResult);

      expect([...printSpy.mock.calls][1].join('')).toEqual(printResult);

      printSpy.mockClear();
    }
  );

  test('전체 다리 출력 테스트', () => {
    OutputView.printMap([
      ['O', ' ', ' '],
      [' ', 'O', 'O'],
    ]);

    expect(printSpy).toHaveBeenNthCalledWith(1, '[ O |   |   ]');
    expect(printSpy).toHaveBeenNthCalledWith(2, '[   | O | O ]');
  });
});
