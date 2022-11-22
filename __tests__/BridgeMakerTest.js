const BridgeMaker = require('../src/BridgeMaker');

describe('다리 생성 테스트', () => {
  test('주어진 size와 함수를 활용하여 값을 잘 반환하는지 확인', () => {
    const randomNumbersArray = [
      [1, 0, 0],
      [0, 1, 1, 1, 0, 1],
    ];
    const resultsArray = [
      ['U', 'D', 'D'],
      ['D', 'U', 'U', 'U', 'D', 'U'],
    ];

    for (let i = 0; i < randomNumbersArray.length; i += 1) {
      const mockGenerator = randomNumbersArray[i].reduce((acc, number) => {
        return acc.mockReturnValueOnce(number);
      }, jest.fn());

      const bridge = BridgeMaker.makeBridge(
        randomNumbersArray[i].length,
        mockGenerator
      );
      expect(bridge).toEqual(resultsArray[i]);
    }
  });
});
