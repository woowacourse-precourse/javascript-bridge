const OutputMaker = require('../src/Utils/OutputMaker');

describe('OutputMaker 테스트', () => {
  test('[makeOutput] : 입력된 값에 따라 정상적으로 output을 반환하는지 테스트', () => {
    // 조건
    const testInput = ['U', 'D'];
    const correctResult = [['O |  '], ['  | O']];

    // 실행
    const expectResult = OutputMaker.makeOutput(testInput, true);

    // 평가
    expect(expectResult).toEqual(correctResult);
  });

  test('[upAndDown] : 입력된 값에 따라 정상적으로 output을 생성하는지 테스트', () => {
    // 조건
    const testInput = ['U', 'D'];
    const correctResult = [
      ['O', ' '],
      [' ', 'O'],
    ];

    // 실행
    const expectResult = OutputMaker.upAndDown(testInput, true);

    // 평가
    expect(expectResult).toEqual(correctResult);
  });

  test('[splitUpAndDown] : output을 정상적으로 분리하는지 테스트', () => {
    // 조건
    const testInput = [
      [' ', 'O'],
      [' ', 'O'],
    ];
    const correctResult = [
      [' ', ' '],
      ['O', 'O'],
    ];

    // 실행
    const expectResult = OutputMaker.splitUpAndDown(testInput);

    // 평가
    expect(expectResult).toEqual(correctResult);
  });
});
