const Validation = require("../src/Utils/Validation");
const { ERR } = require("../src/constants/constants");

describe("InputView 테스트", () => {
  test("validSize 기능 테스트", () => {
    expect(() => {
      Validation.validSize("10a");
    }).toThrow(ERR.NOT_NUMBER);

    expect(() => {
      Validation.validSize("3.5");
    }).toThrow(ERR.NOT_INT);

    expect(() => {
      Validation.validSize(2);
    }).toThrow(ERR.WRONG_BRIDGE_SIZE);
  });

  test("validCommandKey 기능 테스트", () => {
    expect(() => {
      Validation.validCommandKey("1");
    }).toThrow(ERR.WRONG_COMMAND_KEY);

    expect(() => {
      Validation.validCommandKey("r");
    }).toThrow(ERR.WRONG_COMMAND_KEY);
  });
});
