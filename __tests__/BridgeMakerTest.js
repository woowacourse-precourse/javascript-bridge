/* eslint-disable max-lines-per-function */
const BridgeMaker = require('../src/BridgeMaker');

const mockNumbersGenerator = (randomNumbers) =>
  randomNumbers.reduce((acc, number) => acc.mockReturnValueOnce(number), jest.fn());

describe('다리를 생성하는 BridgeMaker 객체 테스트', () => {
  test('다리의 길이를 입력 받아서 다리를 생성한다.', () => {
    const randomNumbers = [0, 1, 1, 0];
    const mockGenerator = mockNumbersGenerator(randomNumbers);
    const bridgeLength = 4;
    const bridge = BridgeMaker.makeBridge(bridgeLength, mockGenerator);

    expect(bridge).toEqual(['D', 'U', 'U', 'D']);
  });
});
