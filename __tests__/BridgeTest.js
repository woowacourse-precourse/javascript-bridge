const Bridge = require('../src/domains/Bridge');

describe('Bridge 클래스 테스트', () => {
  const bridge = new Bridge(['D', 'U', 'D']);

  test('입력값과 현재 칸의 값이 같으면 건너기를 성공한다.', () => {
    expect(bridge.cross('D').status).toEqual([['O', ' ']]);
  });

  test('입력값과 현재 칸의 값이 다르면 건너기를 실패한다.', () => {
    expect(bridge.cross('D').status).toEqual([
      ['O', ' '],
      ['X', ' ']
    ]);
  });

  test('R을 입력하면 true를 반환한다.', () => {
    expect(bridge.reStart('R').isRetry).toBeTruthy();
  });

  test('Q를 입력하면 false를 반환한다.', () => {
    expect(bridge.reStart('Q').isRetry).toBeFalsy();
  });
});
