const UserController = require("../src/controller/UserController");
const MovingInputValidation = require("../src/validation/MovingInputValidation");
const RestartInputValidation = require("../src/validation/RestartInputValidation");

describe("유저 관련 테스트", () => {
  const userController = new UserController();

  test("유저 움직임 input 테스트", () => {
    expect(() => {
      MovingInputValidation.validate("");
    }).toThrow("[ERROR]");

    expect(() => {
      MovingInputValidation.validate("u");
    }).toThrow("[ERROR]");

    expect(() => {
      MovingInputValidation.validate("d");
    }).toThrow("[ERROR]");

    expect(() => {
      MovingInputValidation.validate(".");
    }).toThrow("[ERROR]");

    expect(() => {
      MovingInputValidation.validate("우테코");
    }).toThrow("[ERROR]");
  });

  describe("유저 재시작 의사 input 테스트", () => {
    expect(() => {
      RestartInputValidation.validate("R");
    }).not.toThrow("[ERROR]");

    expect(() => {
      RestartInputValidation.validate("Q");
    }).not.toThrow("[ERROR]");

    expect(() => {
      RestartInputValidation.validate("");
    }).toThrow("[ERROR]");

    expect(() => {
      RestartInputValidation.validate(".");
    }).toThrow("[ERROR]");

    expect(() => {
      RestartInputValidation.validate("우테코");
    }).toThrow("[ERROR]");
  });

  test("유저 시도 횟수 관련 테스트", () => {
    userController.increaseTryCount();
    expect(userController.getTryCount()).toEqual(1);

    userController.increaseTryCount();
    expect(userController.getTryCount()).toEqual(2);
  });
});
