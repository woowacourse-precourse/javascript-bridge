const BridgeGame = require("../src/Models/BridgeGame");
const { ORDER } = require("../src/utils/constants");

const bridgeGame = new BridgeGame();

describe("다리 게임 모델 테스트", () => {
  const result = [ORDER.RETRY, ORDER.QUIT];
  let idx = 0;
  test.each([["R"], ["Q"]])("재시작 입력 처리 테스트", (input) => {
    const errorTest = () => bridgeGame.retry(input);
    expect(errorTest()).toBe(result[idx]);
    idx += 1;
  });
});
