const BridgeGame = require("../src/BridgeGame");

describe(`유저 이동 결과 판단 및 결과를 배열에 저장 테스트`, () => {
  test(`"U"을 입력했을 때 유저가 다리 건너기에 <실패>하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.fail("U");
    expect(bridgeGame.getResult()).toEqual([["X"], [` `]]);
  });

  test(`"U"을 입력했을 때 유저가 다리 건너기에 <성공>하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.pass("U");
    expect(bridgeGame.getResult()).toEqual([["O"], [` `]]);
  });

  test(`"D"을 입력했을 때 유저가 다리 건너기에 <실패>하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.fail("D");
    expect(bridgeGame.getResult()).toEqual([[` `], ["X"]]);
  });

  test(`"D"을 입력했을 때 유저가 다리 건너기에 <성공>하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.pass("D");
    expect(bridgeGame.getResult()).toEqual([[` `], ["O"]]);
  });

  test(`bridge 와 userMove를 입력 받았을 때 통과/실패 를 판단할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["U", "D", "U"];
    const userMove = "U";

    expect(bridgeGame.move(bridge, userMove)).toBeTruthy();
  });

  test(`bridge 와 userMove를 입력 받았을 때 통과/실패 를 판단할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["D", "U", "U"];
    const userMove = "U";

    expect(bridgeGame.move(bridge, userMove)).toBeFalsy();
  });

  test(`bridge 와 userMove를 입력 받았을 때 통과/실패 를 판단할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(2, [[], []], 1);
    const bridge = ["D", "U", "U"];
    const userMove = "U";

    expect(bridgeGame.move(bridge, userMove)).toBeTruthy();
  });

  test(` move() 매서드를 통해 이동한 결과값 배열을 업데이트 할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["D", "U", "U"];
    const userMove = "U";
    //"U" 입력 실패 경우
    bridgeGame.move(bridge, userMove);
    expect(bridgeGame.getResult()).toEqual([["X"], [` `]]);
  });

  test(` move() 매서드를 통해 이동한 결과값 배열을 업데이트 할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["D", "U", "U"];
    const userMove = "D";
    //"U" 입력 실패 경우
    bridgeGame.move(bridge, userMove);
    expect(bridgeGame.getResult()).toEqual([[` `], ["O"]]);
  });

  test(` move() 매서드를 통해 이동한 결과값 배열을 업데이트 할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["U", "U", "U"];
    const userMove = "D";
    //"U" 입력 실패 경우
    bridgeGame.move(bridge, userMove);
    expect(bridgeGame.getResult()).toEqual([[` `], ["X"]]);
  });

  test(` move() 매서드를 통해 이동한 결과값 배열을 업데이트 할 수 있다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const bridge = ["U", "U", "U"];
    const userMove = "U";
    //"U" 입력 실패 경우
    bridgeGame.move(bridge, userMove);
    expect(bridgeGame.getResult()).toEqual([["O"], [` `]]);
  });
});

describe(`입력값에 따라 재시작/종료 판단`, () => {
  test(`유저가 R을 입력하면 true를 반환한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const userInput = "R";

    expect(bridgeGame.retry(userInput)).toBeTruthy();
  });

  test(`유저가 Q을 입력하면 false를 반환한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    const userInput = "Q";

    expect(bridgeGame.retry(userInput)).toBeFalsy();
  });

  test(`유저가 재시작을 입력하면 이동 정보를 담은 배열은 초기화 된다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.pass("U");
    bridgeGame.pass("U");
    expect(bridgeGame.getResult()).toEqual([
      ["O", "O"],
      [` `, ` `],
    ]);
    bridgeGame.reset();

    expect(bridgeGame.getResult()).toEqual([[], []]);
  });

  test(`유저가 재시작을 입력하면 이동 정보 배열은 초기화 되고 시도 횟수는 증가한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);

    bridgeGame.pass("U");
    expect(bridgeGame.getTryCount()).toBe(1);

    bridgeGame.reset();
    expect(bridgeGame.getTryCount()).toBe(2);
  });
});
