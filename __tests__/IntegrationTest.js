/* eslint-disable max-lines-per-function */
const Presenter = require("../src/presenter/Presenter");

describe("기능별 테스트", () => {
  const gamePresenter = new Presenter();
  const mockBridge = ["U", "D", "D", "D", "U", "D"];
  gamePresenter.bridgeGameModel.setBridgeModel(mockBridge);
  test("플레이어 이동 테스트", () => {
    const input = "U";
    const moveResult = gamePresenter.bridgeGameModel.getCurrMoveResult(input);
    const expectedResult = { selectedMove: input, isCrossBridge: true };
    expect(moveResult).toStrictEqual(expectedResult);
  });
  test("플레이어 이동 결과 처리 테스트", () => {});
  test("게임 재시작 테스트", () => {});
  test("게임 종료 테스트", () => {});
});
