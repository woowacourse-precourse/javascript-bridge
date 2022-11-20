const BridgeMaker = require("../src/BridgeMaker");
describe("다리건너기 기능 테스트", () => {
  test("정해진 난수에 따라 U와 D를 가진 배열 출력", () => {
    const randomNumbers = ["0", "1", "1"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["D", "U", "U"]);
  });
});
