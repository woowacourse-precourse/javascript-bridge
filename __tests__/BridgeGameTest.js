const BridgeGame = require("../src/BridgeGame");

describe("BridgeGameTest", () => {
  let bridgeGame_1 = new BridgeGame() ;
  bridgeGame_1.bridge = ["U","D","D","U"] ;
  test("move function", () => {
      expect(bridgeGame_1.move("U")).toEqual("Go");
  });

  test("move function", () => {
      bridgeGame_1.currPos = 3 ;
      expect(bridgeGame_1.move("D")).toEqual("Stop");
  });

  let bridgeGame_2 = new BridgeGame() ;
    test("addPrintMap function", () => {
      expect(bridgeGame_2.addPrintMap("U","O")).toEqual([["O"],[" "]]);
    });
    
    test("addPrintMap function", () => {
        bridgeGame_2.addPrintMap("D","O")
        expect(bridgeGame_2.addPrintMap("D","X")).toEqual([["O", " "," "],[" ","O","X"]]);
    });

    test("retry function", () => {
      expect(bridgeGame_2.retry("R")).toEqual("Retry");
    });

    test("retry function", () => {
        expect(bridgeGame_2.retry("Q")).toEqual("Quit");
    });
});
