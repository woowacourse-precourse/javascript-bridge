const BridgeMaker = require("../src/BridgeMaker");
const Validation = require("../src/Validation");

describe("Validation 객체 테스트", () => {
  test("bridgeLengthValidation가 숫자가 아닌경우", () => {
    expect(() => {
      Validation.bridgeLengthValidation("a");
    }).toThrow("[ERROR] 숫자만 입력해 주세요");
  });

  test("bridgeLengthValidation가 3 ~ 20 범위를 벗어난 경우", () => {
    expect(() => {
      Validation.bridgeLengthValidation("100");
    }).toThrow("[ERROR] 3 에서 20 사이의 수만 입력가능합니다");
  });

  test("moveCommandValidation가 U 또는 D 이외의 값을 입력한 경우", () => {
    expect(() => {
      Validation.moveCommandValidation("C");
    }).toThrow("[ERROR] U 또는 D 만 입력해 주세요");
  });

  test("retryCommandValidation R 또는 Q 이외의 값을 입력한 경우", () => {
    expect(() => {
      Validation.retryCommandValidation("C");
    }).toThrow("[ERROR] R 또는 Q 만 입력해 주세요");
  });
});

describe("BridgeMaker 객체 테스트", () => {
  test("makeBridge가 주어진 대로 다리를 잘 만들어 내는지", () => {
    const randomNumbers = ["1", "0", "0"];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const bridge = BridgeMaker.makeBridge(3, mockGenerator);
    expect(bridge).toEqual(["U", "D", "D"]);
  });
});

describe("BridgeGame 객체 테스트", () => {
  const gameManager = new BridgeGame();
  const bridge = ["U", "D", "U"];
  gameManager.setBridge(bridge);
  test("setBridge가 저장한 객체와 getBridge함수가 반환하는 객체가 내용은 같지만 주소값은 다른지", () => {
    const newBridge = gameManager.getBridge();
    expect(bridge).toEqual(newBridge);
    expect(bridge === newBridge).toEqual(false);
  });
  test("retry 함수가 순서를 초기화하고 횟수값을 증가시키는지", () => {
    gameManager.retry();
    expect(gameManager.getTrial()).toEqual(2);
    expect(gameManager.getOrder()).toEqual(-1);
  });
  test("move 함수가 일치하는 방향 입력시 성공을 반환하는지 ", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual("SUCCESS");
  });
  test("move 함수가 불일치 하는 입력시 실패를 반환하는지 ", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual("FAIL");
  });
  test("move 함수가 마지막으로 일치하는 방향을 입력시 끝을 반환하는지 ", () => {
    const moveResult = gameManager.move("U");
    expect(moveResult).toEqual("END");
  });
});

