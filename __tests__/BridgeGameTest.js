const BridgeMaker = require("../src/BridgeMaker");
const BridgeGame = require("../src/feature/BridgeGame/BridgeGame");
const ErrorWithPrifix = require("../src/lib/model/ErrorWithPrifix");

const testList = () => {
  describe("다리건너기 게임 기능 테스트", () => {
    describe("1. 초기 게임 설정 기능", () => constructorTest());
    describe("2. 다리 이동 및 이동 후 상태 관리 기능", () => moveTest());
    describe("3. 게임 종료 / 재시작 기능", () => retryTest());
  });
};

const getSpy = (spyOption) => {
  jest.restoreAllMocks();
  return jest.spyOn(...spyOption);
};
const bridgeMakerSpy = getSpy([BridgeMaker, "makeBridge"]);
bridgeMakerSpy.mockReturnValue(["U", "D", "D", "U"]);

// 1. 초기 게임 설정 기능
const constructorTest = () => {
  describe("1-1 다리 건너기 게임에 필요한 상태가 잘 생성 되는가?", () => {
    const testCase = [
      {
        testId: "1-1-1",
        explain: "다리 사이즈를 작게 입력했을 때",
        param: [2],
        expected: new ErrorWithPrifix(),
      },
      {
        testId: "1-1-2",
        explain: "다리 사이즈를 크게 입력했을 때",
        param: [23],
        expected: new ErrorWithPrifix(),
      },
      {
        testId: "1-1-3",
        explain: "다리 사이즈를 정확하게 입력했을 때",
        param: [10],
        expected: true,
      },
    ];

    const expectCallbackFunction = (...param) => {
      const [size] = param;
      const bridgeGame = new BridgeGame(size);
      return bridgeGame instanceof BridgeGame;
    };
    testEachCaseFromFormat(testCase, expectCallbackFunction);
  });
};

// 2. 다리 이동 및 이동 후 상태 관리 기능
const moveTest = () => {
  describe("2-1 다리 이동 결과값을 잘 체크하는가?", () => {
    const game = new BridgeGame(4);
    const testCase = [
      {
        testId: "2-1-1",
        explain: "위칸으로 이동, 위칸이 이동 가능할 때",
        param: ["U", 0],
        expected: [true, null],
      },
      {
        testId: "2-1-2",
        explain: "위칸으로 이동, 위칸이 이동 불가능할 때",
        param: ["U", 1],
        expected: [false, null],
      },
      {
        testId: "2-1-3",
        explain: "아래칸으로 이동, 아래칸이 이동 가능할 때",
        param: ["D", 2],
        expected: [null, true],
      },
      {
        testId: "2-1-4",
        explain: "아래칸으로 이동, 아래칸이 이동 불가능할 때",
        param: ["D", 3],
        expected: [null, false],
      },
    ];

    const expectCallbackFunction = (...param) => {
      const [input, round] = param;
      const roundCheckResult = game.roundCheck(input, round);
      return [roundCheckResult.upperResult, roundCheckResult.lowerResult];
    };

    testEachCaseFromFormat(testCase, expectCallbackFunction);
  });

  describe("2-2 다리 이동 결과값으로 이동 후 상태를 잘 바꿔주는가?", () => {
    const game = new BridgeGame(4);
    const testCase = [
      {
        testId: "2-2-1",
        explain: "위칸으로 이동, 위칸이 이동 가능할 때",
        param: ["U"],
        expected: [1, [true], [null]],
      },
      {
        testId: "2-2-2",
        explain: "위칸으로 이동, 위칸이 이동 불가능할 때",
        param: ["U"],
        expected: [2, [true, false], [null, null]],
      },
      {
        testId: "2-2-3",
        explain: "아래칸으로 이동, 아래칸이 이동 가능할 때",
        param: ["D"],
        expected: [3, [true, false, null], [null, null, true]],
      },
      {
        testId: "2-2-4",
        explain: "아래칸으로 이동, 아래칸이 이동 불가능할 때",
        param: ["D"],
        expected: [4, [true, false, null, null], [null, null, true, false]],
      },
    ];

    const expectCallbackFunction = (...params) => {
      const [input] = params;
      game.move(input);
      const { round, lowerSideStatus, upperSideStatus } = game.movementStatus;
      return [round, upperSideStatus, lowerSideStatus];
    };

    testEachCaseFromFormat(testCase, expectCallbackFunction);
  });

  describe("2-3 게임이 종료되는 상태를 잘 나타내주는가?", () => {
    const game = new BridgeGame(4);

    const testCase = [
      {
        testId: "2-3-1",
        explain: "아직 다리를 다 건너지 않았을 때",
        param: ["U"],
        expected: true,
      },
      {
        testId: "2-3-2",
        explain: "이동 불가능한 칸으로 이동했을 때",
        param: ["U", "U"],
        expected: false,
      },
      {
        testId: "2-3-3",
        explain: "이동 불가능한 칸으로 이동했을 때",
        param: ["U", "D", "U"],
        expected: false,
      },
      {
        testId: "2-3-4",
        explain: "다리를 다 건넜을 때",
        param: ["U", "D", "D", "U"],
        expected: false,
      },
      {
        testId: "2-3-5",
        explain: "다리를 다 건넜을 때",
        param: ["U", "D", "D", "D"],
        expected: false,
      },
    ];

    const expectCallback = (...param) => {
      const game = new BridgeGame(4);
      param.forEach((moveInput) => {
        game.move(moveInput);
      });
      return game.gameStatus.playing;
    };
    testEachCaseFromFormat(testCase, expectCallback);
  });
};

// 3. 게임 종료 / 재시작 기능
const retryTest = () => {
  describe("3-1 게임 종료 또는 재시작이 잘 실행되는가?", () => {
    const game = new BridgeGame(4);
    const testCase = [
      {
        testId: "3-1-1",
        explain: "게임 종료가 잘 되는가?",
        param: ["Q"],
        expected: false,
      },
      {
        testId: "3-1-2",
        explain: "재시작이 잘 되는가?",
        param: ["R"],
        expected: true,
      },
      {
        testId: "3-1-3",
        explain: "재시작이 잘 되는가? - 실수로 값이 잘못 들어 갔을 때 에러",
        param: ["C"],
        expected: new Error(),
      },
    ];

    const expectCallbackFunction = (...param) => {
      const [input] = param;
      return game.retry(input);
    };

    testEachCaseFromFormat(testCase, expectCallbackFunction);
  });
  describe("3-2 게임 재시작 후 게임상태 처리가 잘 되는가?", () => {
    const testCase = [
      {
        testId: "3-2-2",
        explain: "이동 리셋 확인",
        param: ["R", "movementStatus", ["D"]],
        expected: {
          round: 0,
          upperSideStatus: [],
          lowerSideStatus: [],
        },
      },
      {
        testId: "3-2-2",
        explain: "시도 횟수 확인",
        param: ["R", "gameStatus", ["D"]],
        expected: { success: false, playing: true, trial: 2 },
      },
      {
        testId: "3-2-3",
        explain: "재시작이 잘 되는가?",
        param: ["R", "gameStatus", ["U", "D", "D", "D"]],
        expected: { success: false, playing: true, trial: 2 },
      },
    ];

    const expectCallbackFunction = (...param) => {
      const [input, checkMethod, move] = param;
      const game = new BridgeGame(4);
      move.forEach((moveInput) => {
        game.move(moveInput);
      });
      game.retry(input);
      return game[checkMethod];
    };

    testEachCaseFromFormat(testCase, expectCallbackFunction);
  });
};

const testEachCaseFromFormat = (testCase, callback) => {
  test.each(testCase)(
    "$testId, $explain $param => $expected",
    ({ param, expected }) => {
      if (expected instanceof Error) expect(() => callback(...param)).toThrow();
      else if (typeof expected === "object")
        expect(expect(callback(...param)).toStrictEqual(expected));
      else expect(callback(...param)).toBe(expected);
    }
  );
};

testList();
