/*eslint-disable*/
const BridgeGame = require("../src/BridgeGame");

describe("다리 게임 클래스 테스트", () => {
  test("경로 이동을 했을 때 U또는 D가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new BridgeGame(["U", "D", "U"]).move("u");
    }).toThrow("[ERROR]");
  });

  test("경로 이동을 했을 때 공백이 존재한다면 예외가 발생한다.", () => {
    expect(() => {
      new BridgeGame(["U", "D", "U"]).move("");
    }).toThrow("[ERROR]");
  });

  test("이동한 경로에 X가 포함되어있는지 실패 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const item = ["U", "D", "D"];
    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.checkX()).toEqual(false);
  });

  test("이동한 경로에 X가 포함되어있는지 성공 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const item = ["U", "D", "U"];
    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.checkX()).toEqual(true);
  });

  test("이동한 경로의 길이와 최종 경로의 길이 비교 성공 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const item = ["U", "D", "D"];

    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.lengthCompare()).toEqual(true);
  });

  test("이동한 경로의 길이와 최종 경로의 길이 비교 성공 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "D", "U"]);
    const item = ["U", "D"];

    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.lengthCompare()).toEqual(false);
  });

  test("성공인지 실패인지 반환하는 메서드 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D", "D"]);
    const item = ["U", "U", "D", "U"];

    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.returnSuccessFail()).toEqual("실패");
  });

  test("최종 출력에서 필요로 하는 인자들을 변환하여 반환하는 메서드의 테스트", () => {
    const bridgeGame = new BridgeGame(["U", "U", "D"]);
    const item = ["U", "U", "D"];

    item.forEach((v) => {
      bridgeGame.move(v);
    });
    expect(bridgeGame.returnUpDownTryCountArray()).toEqual([
      "[ O | O |   ]",
      "[   |   | O ]",
      "성공",
      1,
    ]);
  });
});
