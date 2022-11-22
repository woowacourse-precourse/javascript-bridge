const ERROR_MESSAGE = require("../src/constants/ErrorMessage");
const BridgeGame = require("../src/model/BridgeGame");

describe("BridgeGame 클래스 테스트", () => {
  test.each([2, 23, 'string'])("입력 다리길이는 3 ~ 20 사이의 숫자여야 한다.", 
  (input) => {
    expect(()=>{new BridgeGame(input)}).toThrow(ERROR_MESSAGE.BRIDGE_LENGTH);
  }
  );

  test("이동할 칸은 U 혹은 D 여야 한다.", () => {
    const bridgeGame = new BridgeGame(3);
    expect(()=>{bridgeGame.move('a')}).toThrow(ERROR_MESSAGE.INPUT_MOVING);}
  );

  test("재시도 입력은 U 혹은 D 여야 한다.", () => {
    const bridgeGame = new BridgeGame(3);
    expect(()=>{bridgeGame.retry('a')}).toThrow(ERROR_MESSAGE.INPUT_RETRY);}
  );
});