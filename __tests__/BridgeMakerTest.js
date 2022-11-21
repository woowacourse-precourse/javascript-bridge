const BridgeMaker = require("../src/BridgeMaker");

describe("BridgeMakerTest", () => {
  test("다리 생성 테스트_1", () => {
    let randomForTest = () => {
      return 1 ;
    }
    expect(BridgeMaker.makeBridge(3,randomForTest)).toEqual(["U", "U", "U"]);
  });
  
  test("다리 생성 테스트_2", () => {
    let randomForTest = () => {
      return 0 ;
    }
    expect(BridgeMaker.makeBridge(5,randomForTest)).toEqual(["D", "D","D","D","D"]);
  });

  });