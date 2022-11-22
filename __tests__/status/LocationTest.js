const Location = require('../../src/models/status/Location');

describe('위치 클래스 테스트', () => {
  const location = new Location();

  test('위치의 초기값은 -1', () => {
    const result = location.getState();

    expect(result).toEqual(-1);
  });

  test('위치 증가', () => {
    location.increment();
    const result = location.getState();

    expect(result).toEqual(0);
  });
});

describe('위치 상태 확인 테스트', () => {
  const location = new Location();

  beforeAll(() => {
    location.increment();
    location.increment();
    location.increment();
  });

  test('마지막 위치와 현재 위치가 다르면 false', () => {
    const result = location.isLast(4);

    expect(result).toEqual(false);
  });

  test('마지막 위치와 현재 위치가 같으면 true', () => {
    const result = location.isLast(3);

    expect(result).toEqual(true);
  });

  test('시도 횟수 초기화', () => {
    location.reset();
    const result = location.getState();

    expect(result).toEqual(-1);
  });
});
