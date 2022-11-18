/* eslint-disable */
const BridgeMaker = require('../src/model/BridgeMaker');
const BridgeSize = require('../src/model/BridgeSize');

describe('다리 길이 테스트', () => {
  test.each(['2', '0', '-123'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new BridgeSize(input).showValidateResult();
    }).toThrow('[ERROR]');
  });

  test.each([' ', '삼이일', 'three', '1e3', '@#$'])('숫자 이외에 대한 예외처리', (input) => {
    expect(() => {
      new BridgeSize(input).showValidateResult();
    }).toThrow('[ERROR]');
  });

  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '1', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(['1', '0', '1', '1']);
  });
});
