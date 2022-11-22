const BridgeMaker = require("../src/BridgeMaker");

describe("BridgeMakerTest", () => {
  test("Bridge Build", () => {
    let randomForTest = () => {
      return 1 ;
    }
    expect(BridgeMaker.makeBridge(5,randomForTest)).toEqual(["U", "U", "U", "U", "U"]);
  });
  
  test("Bridge Build", () => {
    let randomForTest = () => {
      return 0 ;
    }
    expect(BridgeMaker.makeBridge(10,randomForTest)).toEqual(["D", "D", "D", "D", "D", "D", "D", "D", "D", "D"]);
  });

  test("Bridge Build", () => {
    let randomForTest = () => {
      return 1 ;
    }
    expect(BridgeMaker.makeBridge(15,randomForTest)).toEqual(["U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U", "U"]);
  });

  test("Bridge Build", () => {
    let randomForTest = () => {
      return 0 ;
    }
    expect(BridgeMaker.makeBridge(19,randomForTest)).toEqual(["D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D", "D"]);
  });

});