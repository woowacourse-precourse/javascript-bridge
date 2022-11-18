const { ERROR, INPUT, OUTPUT } = require("../src/data/Constants");
const Validation = require("../src/Validation");
const App = require("../src/App");
const BridgeMaker = require("../src/BridgeMaker");
const BridgeRandomNumberGenerator = require("../src/BridgeRandomNumberGenerator");
const BridgeGame = require("../src/BridgeGame");
const { checkRetry } = require("../src/Validation");

describe(`bridgeSize 입력값 타당성 테스트`, () => {
  test.each([["0"], ["-1"], ["21"]])(
    `유저가 3~20 사이의 숫자를 입력했는지 확인`,
    (input) => {
      expect((input) => {
        Validation.checkBridgeLength(input);
      }).toThrow();
    }
  );

  test.each([["a"], ["a1"], ["#3"], ["10."]])(
    `유저가 숫자만 입력 했는지 확인`,
    () => {
      (input) => {
        expect((input) => {
          Validation.checkBridgeLength(input);
        }).toThrow();
      };
    }
  );
});

describe(`다리를 생성기능 테스트`, () => {
  test(`입력받은 bridgeSize와 만들어진 다리 배열의 길이는 일치한다`, () => {
    const size = 3;
    const generateRandomNumber = BridgeRandomNumberGenerator.generate;

    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toHaveLength(
      size
    );
  });

  test(`생성된 랜덤 숫자가 1이면 "U"를 배열에 저장한다.`, () => {
    const size = 3;
    function generateRandomNumber() {
      return 1;
    }
    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "U",
      "U",
      "U",
    ]);
  });

  test(`생성된 랜덤 숫자가 0이면 "U"를 배열에 저장한다`, () => {
    const size = 3;
    function generateRandomNumber() {
      return 0;
    }
    expect(BridgeMaker.makeBridge(size, generateRandomNumber)).toEqual([
      "D",
      "D",
      "D",
    ]);
  });

  test(`생선된 랜덤 숫자는 0 또는 1 이다.`, () => {
    expect(String(BridgeRandomNumberGenerator.generate())).toMatch(/0|1/);
  });
});
describe(`userMove 입력값 타당성 테스트`, () => {
  test.each([["u"], ["d"]])(
    `알파벳이 UpperCase가 아닐 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkMove(input);
      }).toThrow();
    }
  );

  test.each([["#d"], ["a"], ["1d"], ["3U"], ["123"]])(
    `U 또는 D 가 아닌 다른 걸 입력했을 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkMove(input);
      }).toThrow();
    }
  );
  test.each([["DD"], ["UU"], ["Ud"], ["U3"], ["U%"]])(
    `2글자 이상을 입력했을 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkMove(input);
      }).toThrow();
    }
  );
});

describe(`유저 이동 결과 판단 테스트`, () => {
  test(`U을 입력했을 때 유저가 다리 건너기에 실패하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.fail("U");
    expect(bridgeGame.getResult()).toEqual([["X"], [` `]]);
  });

  test(`U을 입력했을 때 유저가 다리 건너기에 성공하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.pass("U");
    expect(bridgeGame.getResult()).toEqual([["O"], [` `]]);
  });

  test(`D을 입력했을 때 유저가 다리 건너기에 실패하면 이중 배열에 그 결과값을 저장한다.`, () => {
    const bridgeGame = new BridgeGame(0, [[], []], 1);
    bridgeGame.fail("D");
    expect(bridgeGame.getResult()).toEqual([[` `], ["X"]]);
  });

  test(`D을 입력했을 때 유저가 다리 건너기에 성공하면 이중 배열에 그 결과값을 저장한다.`, () => {
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
});

describe(`재시작 입력값 타당성 테스트`, () => {
  test.each([["r"], ["q"]])(
    `알파벳이 UpperCase가 아닐 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkRetry(input);
      }).toThrow();
    }
  );

  test.each([["3R"], ["a"], ["#"], ["Q."]])(
    `R 또는 Q가 아닌 다른 걸 입력했을 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkRetry(input);
      }).toThrow();
    }
  );

  test.each([["RR"], ["R3"], ["QQ"], ["QR"]])(
    `2글자 이상을 입력했을 때 에러발생`,
    (input) => {
      expect((input) => {
        Validation.checkRetry(input);
      }).toThrow();
    }
  );
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
