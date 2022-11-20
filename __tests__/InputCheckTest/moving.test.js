const Moving = require('../../src/InputCheck/Moving');

describe('checkInput', () => {
  it('U 또는 D를 입력하였을 경우 입력할 문자를 출력', () => {
    let moving = new Moving('U');
    expect(moving.checkInput()).toBe('U');

    moving = new Moving('D');
    expect(moving.checkInput()).toBe('D');
  });

  it('[Error] U 또는 D가 중복으로 입력되었을 경우 예외 처리', () => {
    let moving = new Moving('UU');
    expect(() => moving.checkInput()).toThrow();

    moving = new Moving('DD');
    expect(() => moving.checkInput()).toThrow();
  });

  it('[Error] U 또는 D이외의 문자를 입력하였을 경우 예외 처리', () => {
    let moving = new Moving('A');
    expect(() => moving.checkInput()).toThrow();

    moving = new Moving('23');
    expect(() => moving.checkInput()).toThrow();
  });
});
