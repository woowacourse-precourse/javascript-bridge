const MissionUtils = require("@woowacourse/mission-utils");
const BridgeGameResult = require("../../src/domain/BridgeGameResult");

describe("BridgeMaker 테스트", () => {
  test("성공여부가 반환되는 지 확인한다.", () => {
    expect(BridgeGameResult.isSuccess(true)).toEqual("성공");
    expect(BridgeGameResult.isSuccess(false)).toEqual("실패");
  });

  test("게임 결과 메시지가 반환되는지 확인한다.", () => {
    const isEnd = true;
    const attempts = 4;

    expect(BridgeGameResult.gameResult(isEnd, attempts)).toEqual("게임 성공 여부: 성공 \n총 시도한 횟수: 4");
  });


});