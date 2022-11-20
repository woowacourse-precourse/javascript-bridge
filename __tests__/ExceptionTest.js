const Validation = require("../src/util");

const InputCheck = {
  SIZE(inputs) {
    inputs.forEach((input) => {
      expect(() => Validation.SIZE(input)).toThrow();
    })
  },
  STEP(inputs) {
    inputs.forEach((input) => {
      expect(() => Validation.STEP(input)).toThrow();
    })
  },
  RETRY(inputs) {
    inputs.forEach((input) => {
      expect(() => Validation.RETRY(input)).toThrow();
    })
  }
} 
const sizeInput = jest.fn(number => Validation.SIZE(number))
const directionInput = jest.fn(direction => Validation.STEP(direction))
const commandInput = jest.fn(command => Validation.RETRY(command))


describe.only("단위 유효성 검사", () => {
  test("다리 길이값을 잘못 입력하면 throw를 통해 예외처리한다.", () => {
    const wrongInput = [1,2,'f',21];
    InputCheck.SIZE(wrongInput);
  });

  test("다리 길이 입력값이 맞다면 true를 반환한다.", () => {
    for( let i = 3; i < 21; i++) {
      sizeInput(i);
      expect(sizeInput).toHaveNthReturnedWith(i-2, true);
    }
  });

  test("다리 진행방향 입력값이 올바르다면 true를 반환한다.", () => {

    directionInput('U')
    directionInput('D')
    expect(directionInput).toHaveNthReturnedWith(1, true);
    expect(directionInput).toHaveNthReturnedWith(2, true);
  });

  test("다리 진행방향을 잘못 입력하면 throw를 통해 예외처리한다.", () => {
    const wrongInput = [1,2,'uu','dd', 'd','u'];
    InputCheck.STEP(wrongInput);
  });

  test("게임 재시도 입력값을 올바르게 입력하면 true를 반환한다.", () => {

    commandInput('R');
    commandInput('Q');
    expect(commandInput).toHaveNthReturnedWith(1, true);
    expect(commandInput).toHaveNthReturnedWith(2, true);
  });

  test("게임 재시도 명령어를 잘못 입력하면 throw를 통해 예외처리한다.", () => {
    const wrongInput = [1,2,'qq','r', 'q'];
    InputCheck.RETRY(wrongInput);
  });

});
