const OutputView = require("../src/OutputView");

describe("OutputView 클래스 테스트", () => {
  test("플레이어 이동 이력을 잘 기록했는지 확인", () => {
    const upRecord = OutputView.makeRecord("UDDU", false, 'U');
    const downRecord = OutputView.makeRecord("UDDU", false, 'D');
    
    expect(upRecord).toEqual("O  X");
    expect(downRecord).toEqual(" OO ");
  });
});
