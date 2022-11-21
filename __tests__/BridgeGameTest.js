const BridgeGame = require("../src/BridgeGame");

describe("BridgeGameTest", () => {
  let bridgeGame_1 = new BridgeGame() ;
  bridgeGame_1.bridge = ["U","D","D","U"] ;
  test("UD에 따라 전진가능 확인 함수(move)_1", () => {
      expect(bridgeGame_1.move("U")).toEqual("Go");
  });

  test("UD에 따라 전진가능 확인 함수(move)_2", () => {
      bridgeGame_1.currSpot = 3 ;
      expect(bridgeGame_1.move("D")).toEqual("Stop");
  });

  let bridgeGame_2 = new BridgeGame() ;
    test("맵 프린팅을 위한 함수(addPrintMap)_1", () => {
      expect(bridgeGame_2.addPrintMap("U","O")).toEqual([["O"],[" "]]);
    });
    
    test("맵 프린팅을 위한 함수(addPrintMap)_2", () => {
        bridgeGame_2.addPrintMap("D","O")
        expect(bridgeGame_2.addPrintMap("D","X")).toEqual([["O", " "," "],[" ","O","X"]]);
    });

});

