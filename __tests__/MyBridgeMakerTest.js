const { makeBridge } = require("../src/BridgeMaker");
const ErrorMessage = require("../src/messages/ErrorMessage");

const SIZE_OF_BRIDGE = 3;

describe("Bridge Maker", () => {
  let generate;
  generate = jest.fn();

  beforeEach(() => {
    generate
      .mockReturnValueOnce(0)
      .mockReturnValueOnce(1)
      .mockReturnValueOnce(1);
  });

  it("size에 숫자 외의 값이 입력되면 예외를 발생시켜야 한다.", () => {
    expect(() => {
      makeBridge("abc", generate);
    }).toThrow(ErrorMessage.NOT_INTEGER);
  });

  it("size에 3이상 20이하의 숫자값이 입력되지 않으면 예외를 발생시켜야 한다.", () => {
    expect(() => {
      makeBridge(2, generate);
    }).toThrow(ErrorMessage.NOT_IN_RANGE);
  });

  it("내가 원하는 형태의 다리가 만들어져야 한다.", () => {
    expect(makeBridge(SIZE_OF_BRIDGE, generate)).toEqual(["D", "U", "U"]);
  });
});
