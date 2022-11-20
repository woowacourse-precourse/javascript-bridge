const BridgeSize = require('../../src/InputCheck/BridgeSize');
describe('checkInput ', () => {
  it('3~20사이의 숫자를 입력시 입력 숫자 return', () => {
    // given
    const bridgeSize = new BridgeSize('17');

    // when
    // then
    expect(bridgeSize.checkInput()).toBe('17');
  });

  it('[Error] 공백을 입력하였을 경우 에러 처리', () => {
    // given
    const bridgeSize = new BridgeSize('');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();
  });

  it('[Error] 3~20사이의 숫자가 아닐 경우', () => {
    // given
    const bridgeSize = new BridgeSize('33');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();
  });

  it('[Error] 숫자이외의 문자가 입력되었을 경우 에러 처리', () => {
    // given
    const bridgeSize = new BridgeSize('마포대교는 무너졌냐?');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();
  });

  it('[Error] 숫자와 문자가 혼합되어있을 경우 예외 처리', () => {
    // given
    const bridgeSize = new BridgeSize('아부지0굴러가유');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();
  });

  it('[Error] - 또는 + 부호가 포함되었을 경우 예외 처리', () => {
    // given
    let bridgeSize = new BridgeSize('+5');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();

    bridgeSize = new BridgeSize('-7');

    // when
    // then
    expect(() => bridgeSize.checkInput()).toThrow();
  });
});
