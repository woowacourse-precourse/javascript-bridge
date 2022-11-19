const OutputView = require("../src/view/OutputView");

describe("다리 건너기 게임 맵 생성 테스트", () => {
  test.only("맵 생성하기", () => {
    const map = [
      { selectedMove: "U", isMove: true },
      { selectedMove: "D", isMove: true },
      { selectedMove: "D", isMove: false },
    ];
    OutputView.createBridge(map);
  });
});
