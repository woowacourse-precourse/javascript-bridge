const Utilities = require('../src/utils/Utilities');

describe('Utilites 테스트', () => {
  test('성공 여부 확인 테스트', () => {
    const test = Utilities.isSuccess(true);
    expect(test).toEqual('성공');
  });

  test('결과 출력용 문자열 변환 테스트', () => {
    const resultArr = [
      ['U', true],
      ['D', true],
      ['U', false],
    ];
    const resultString = Utilities.convertResultToString(resultArr);

    expect(resultString).toEqual(['[ O |   | X ]', '[   | O |   ]']);
  });
});
