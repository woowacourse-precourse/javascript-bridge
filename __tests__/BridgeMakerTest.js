const { Console } = require('@woowacourse/mission-utils');
const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('랜덤 값이 0인데 다리가 "U"인 경우', () => {
    const randomNumbers = ['0', '0', '0'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    expect(bridge === ['U', 'D', 'D']).toEqual(false);
  });

  test('랜덤 값이 1인데 다리가 "D"인 경우', () => {
    const randomNumbers = ['1', '1', '1'];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);

    expect(bridge === ['D', 'U', 'U']).toEqual(false);
  });
});

afterAll(() => {
  Console.close();
});
