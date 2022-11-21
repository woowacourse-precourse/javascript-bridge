const Attempt = require('../src/domain/result/Attempt');

describe('Attempt 클래스 테스트', () => {
  test('시도 횟수에 따른 출력값 확인', () => {
    const attempt = new Attempt();
    expect(attempt.print()).toEqual('총 시도한 횟수: 1');
    attempt.add();
    attempt.add();
    attempt.add();
    expect(attempt.print()).toEqual('총 시도한 횟수: 4');
  });
  
});
