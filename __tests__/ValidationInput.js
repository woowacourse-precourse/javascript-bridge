/* eslint-disable */
const Validation = require('../src/model/Validaion');
const BridgeMaker = require('../src/BridgeMaker');
const { BRIDGESIZE_KEY, MOVEMENT_KEY, COMMAND_KEY } = require('../src/constant/Key');

describe('다리 길이 테스트', () => {
  test.each(['2', '0', '-123'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new Validation(BRIDGESIZE_KEY.CHECK_VALIDATION, input).showResult();
    }).toThrow('[ERROR]');
  });

  test.each([' ', '삼이일', 'three', '1e3', '@#$'])('숫자 이외에 대한 예외처리', (input) => {
    expect(() => {
      new Validation(BRIDGESIZE_KEY.CHECK_VALIDATION, input).showResult();
    }).toThrow('[ERROR]');
  });

  test('다리 생성 테스트', () => {
    const randomNumbers = ['1', '0', '1', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(4, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'U', 'U']);
  });
});

describe('움직임 테스트', () => {
  test.each(['u', 'd', '34', '4', 'go'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new Validation(MOVEMENT_KEY.CHECK_VALIDATION, input).showResult();
    }).toThrow('[ERROR]');
  });
});

describe('명령어 테스트', () => {
  test.each(['r', 'q', 'qq', '0', '1'])('범위 미만의 금액에 대한 예외처리', (input) => {
    expect(() => {
      new Validation(COMMAND_KEY.CHECK_VALIDATION, input).showResult();
    }).toThrow('[ERROR]');
  });
});
