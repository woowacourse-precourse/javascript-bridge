const BridgeMaker = require('../src/BridgeMaker');
const BridgeRandomNumberGenerator = require('../src/Model/BridgeRandomNumberGenerator');

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe('다리 만들기 테스트', () => {
  test('다리는 랜덤 숫자가 1이면 대문자 U를, 랜덤 숫자가 0이면 대문자 D를 값으로 가진다.', () => {
    const randomNumbers = [1, 0, 0, 1, 1];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(5, mockGenerator);
    expect(bridge).toEqual(['U', 'D', 'D', 'U', 'U']);
  });
});

