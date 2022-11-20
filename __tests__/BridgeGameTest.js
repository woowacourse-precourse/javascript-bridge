const BridgeMaker = require('../src/BridgeMaker')
const isNumber = require('../src/validator/isNumber')

describe("다리 건너기 테스트", () => {
  test("다리 생성 테스트1", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("다리 생성 테스트2", () => {
    const randomNumbers = ["1", "1", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "U", "D"]);
  });

  test("다리 생성 테스트3", () => {
    const randomNumbers = ["0", "1", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "U", "D"]);
  });
});

describe('사용자의 입력 유효성 테스트', () => {
  test('3 ~ 20 범위 테스트1', () => {
    expect(isNumber(15)).toEqual(15)
  })
  test('3 ~ 20 범위 테스트2', () => {
    expect(() => {
      isNumber('a')
    }).toThrow('[ERROR]')
  })
  test('3 ~ 20 범위 테스트3', () => {
    expect(() => {
      isNumber(22)
    }).toThrow('[ERROR]')
  })
})