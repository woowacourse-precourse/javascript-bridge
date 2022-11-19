const { describe, expect, test } = require('@jest/globals');

describe('move() 메서드 테스트', () => {
  let crossingOrder = [];

  const moveMockFn = jest.fn((direction) => {
    crossingOrder.push([direction, direction === 'U' ? 0 : 1]);
  });

  test('move 메서드가 실행되면 crossingOrder 요소가 1씩 증가한다.', () => {
    moveMockFn('U');

    expect(crossingOrder).toHaveLength(1);
    crossingOrder = [];
  });

  test('move 메서드가 3번 실행되면 crossingOrder의 길이는 3이다.', () => {
    ['U', 'D', 'D'].forEach((dircetion) => moveMockFn(dircetion));

    expect(crossingOrder).toHaveLength(3);
    crossingOrder = [];
  });

  test('crossingOrder의 요소의 첫번째 요소는 문자열 방향이다.', () => {
    moveMockFn('U');

    expect(crossingOrder[0][0]).toEqual('U');
    crossingOrder = [];
  });

  test('crossingOrder의 요소의 두번째 요소는 숫자이며 0은 U, 1은 D를 의미한다.', () => {
    moveMockFn('U');

    expect(crossingOrder[0][1]).toEqual(0);
    crossingOrder = [];
  });
});
