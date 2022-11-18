const BridgeMaker = require("../src/BridgeMaker");

const getMockGenerator = (randomNumbers) => {
  return randomNumbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, jest.fn());
};

describe("다리 생성 테스트", () => {
  test("다리 랜덤 값이 문자열 타입 일 때 생성 테스트", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = getMockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });

  test("다리 랜덤 값이 숫자 타입 일 때 생성 테스트", () => {
    const randomNumbers = [0, 1, 0];
    const mockGenerator = getMockGenerator(randomNumbers);

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "U", "D"]);
  });

  test("다리의 길이가 20 보다 클때 에러 처리 테스트", () => {
    const mockGenerator = () => 0;

    expect(() => {
      BridgeMaker.makeBridge(21, mockGenerator);
    }).toThrow("[ERROR] 다리의 길이는 3~20 사이의 숫자여야 합니다.");
  });

  test("다리의 길이가 3보다 작을때 에러 처리 테스트", () => {
    const mockGenerator = () => 0;

    expect(() => {
      BridgeMaker.makeBridge(1, mockGenerator);
    }).toThrow("[ERROR] 다리의 길이는 3~20 사이의 숫자여야 합니다.");
  });
});
