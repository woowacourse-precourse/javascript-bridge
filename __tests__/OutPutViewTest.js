const { describe, expect, test } = require('@jest/globals');
const { Console } = require('@woowacourse/mission-utils');
const OutputView = require('../src/View/OutputView');

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

    printSpy.mockClear();
  });
});

describe('printResult 메서드 테스트', () => {
  test('Console.print가 총 2번 호출된다.', () => {
    OutputView.printResult({ isSuccess: true, attempCount: 3 });

    expect(printSpy).toHaveBeenCalledTimes(2);

    printSpy.mockClear();
  });

  test.each([
    [{ isSuccess: true, attempCount: 1 }, '성공'],
    [{ isSuccess: false, attempCount: 1 }, '실패'],
  ])('성공여부 출력 테스트', (result, isSuccess) => {
    OutputView.printResult(result);

    expect(printSpy).toHaveBeenNthCalledWith(
      1,
      `\n게임 성공 여부: ${isSuccess}`
    );

    printSpy.mockClear();
  });

  test.each([
    [{ isSuccess: true, attempCount: 1 }],
    [{ isSuccess: true, attempCount: 3 }],
    [{ isSuccess: true, attempCount: 20 }],
  ])('시도 횟수 출력 테스트', (result) => {
    OutputView.printResult(result);

    expect(printSpy).toHaveBeenNthCalledWith(
      2,
      `총 시도한 횟수: ${result.attempCount}`
    );

    printSpy.mockClear();
  });

  test.each([
    [{ isSuccess: true, attempCount: 5 }, '성공'],
    [{ isSuccess: false, attempCount: 10 }, '실패'],
  ])('결과 전체 출력 테스트', (result, isSuccess) => {
    OutputView.printResult(result);

    expect(printSpy).toHaveBeenNthCalledWith(
      1,
      `\n게임 성공 여부: ${isSuccess}`
    );
    expect(printSpy).toHaveBeenNthCalledWith(
      2,
      `총 시도한 횟수: ${result.attempCount}`
    );

    printSpy.mockClear();
  });
});
