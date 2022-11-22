const Result = require('../src/domain/result/Result');

describe('Result 클래스 테스트', () => {
  test.each([
    ['success', '성공'], ['fail', '실패']
  ])('게임 성공 여부 결과 출력', (type, result) => {
    expect(Result.print(type)).toEqual(`게임 성공 여부: ${result}`);
  });
});
