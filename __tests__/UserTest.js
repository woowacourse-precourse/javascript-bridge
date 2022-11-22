const { validate } = require("../src/validation/MovingInputValidation");
const UserController = require("../src/controller/UserController");
describe("유저 관련 테스트", () => {
  const userController = new UserController();

  test("유저 움직임 input 테스트", () => {
    expect(() => {
      validate("");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("u");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("d");
    }).toThrow("[ERROR]");

    expect(() => {
      validate(".");
    }).toThrow("[ERROR]");

    expect(() => {
      validate("우테코");
    }).toThrow("[ERROR]");
  });

  test("유저 시도 횟수 관련 테스트", () => {
    userController.increaseTryCount();
    expect(userController.getTryCount()).toEqual(1);

    userController.increaseTryCount();
    expect(userController.getTryCount()).toEqual(2);
  });
});
