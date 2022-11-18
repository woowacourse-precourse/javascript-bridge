const Bridge = require('../src/domains/Bridge');

describe('Bridge 클래스 테스트', () => {
  const bridge = new Bridge(['D', 'U', 'D']);

  test('입력값과 현재 칸의 값이 같으면 건너기를 성공한다.', () => {
    expect(bridge.cross('D')).toEqual({ status: [['O', '']], result: true });
  });

  test('입력값과 현재 칸의 값이 다르면 건너기를 실패한다.', () => {
    expect(bridge.cross('D')).toEqual({
      status: [
        ['O', ''],
        ['X', '']
      ],
      result: false
    });
  });
});
