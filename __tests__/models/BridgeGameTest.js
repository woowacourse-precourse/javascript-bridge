const { Bridge, BridgeGame } = require("../../src/models");
const BridgeMaker = require("../../src/BridgeMaker");

jest.mock("../../src/models/Bridge");
jest.mock("../../src/BridgeMaker");

const mockMakeBridge = (directions) => {
  BridgeMaker.makeBridge.mockReturnValue(directions);
};

const mockIsMovable = (bridge, round, direction) => {
  Bridge.prototype.isMovable.mockImplementation(() => {
    return bridge[round] === direction;
  });
};

const mockBridgeSize = (bridge) => {
  Bridge.prototype.size.mockImplementation(() => {
    return bridge.length;
  });
};

describe("makeBridge 메서드 테스트", () => {
  test("다리를 생성할 수 있어야 합니다.", () => {
    // given
    const BRIDGE_SIZE = 3;
    const bridgeGame = new BridgeGame();
    mockMakeBridge(["U", "D", "U"]);

    // when
    bridgeGame.makeBridge(BRIDGE_SIZE);

    // then
    expect(Bridge).toHaveBeenCalledWith(["U", "D", "U"]);
  });

  test("다리의 길이가 숫자가 아니라면 예외가 발생해야 합니다.", () => {
    // given
    const BRIDGE_SIZE = "A";

    // when
    const makeBridge = () => {
      const bridgeGame = new BridgeGame();
      bridgeGame.makeBridge(BRIDGE_SIZE);
    };

    // then
    expect(makeBridge).toThrow("[ERROR]");
  });

  test("다리의 길이가 3이상 20이하가 아니라면 예외가 발생해야 합니다.", () => {
    // given
    const BRIDGE_SIZES = [-1, 0, 2, 21, 30];

    // when
    const makeBridge = (bridgeSize) => {
      const bridgeGame = new BridgeGame();
      bridgeGame.makeBridge(bridgeSize);
    };

    // then
    BRIDGE_SIZES.forEach((bridgeSize) => {
      expect(() => makeBridge(bridgeSize)).toThrow("[ERROR]");
    });
  });
});

describe("move 메서드 테스트", () => {
  test("올바른 방향이 입력되지 않으면 예외를 발생시켜야 한다.", () => {
    // given
    const DIRECTIONS = ["A", 0, null];
    const bridgeGame = new BridgeGame();

    // when
    const move = (direction) => bridgeGame.move(0, direction);

    // then
    DIRECTIONS.forEach((direction) => {
      expect(() => move(direction)).toThrow("[ERROR]");
    });
  });

  test("이동 상태를 반환할 수 있어야 합니다.", () => {
    // given
    const ROUND = 0;
    const DIRECTION = "U";
    const BRIDGE_SIZE = 3;
    const mockBridge = ["U", "D", "U"];
    const bridgeGame = new BridgeGame();

    mockMakeBridge(mockBridge);
    mockIsMovable(mockBridge, ROUND, DIRECTION);
    bridgeGame.makeBridge(BRIDGE_SIZE);

    // when
    const { movingState } = bridgeGame.move(0, DIRECTION);

    // then
    expect(movingState).toBe(true);
  });

  test("사용자의 이동 현황을 반환할 수 있어야 합니다.", () => {
    // given
    const ROUND = 0;
    const DIRECTION = "U";
    const BRIDGE_SIZE = 3;
    const mockBridge = ["U", "D", "U"];
    const bridgeGame = new BridgeGame();

    mockMakeBridge(mockBridge);
    mockIsMovable(mockBridge, ROUND, DIRECTION);
    bridgeGame.makeBridge(BRIDGE_SIZE);

    // when
    const { map } = bridgeGame.move(0, DIRECTION);

    // then
    expect(map).toEqual([["U", true]]);
  });

  test("이동할 때마다 이동 현황에 기록할 수 있어야 합니다.", () => {
    // given
    const BRIDGE_SIZE = 3;
    const DIRECTIONS = ["U", "D", "D"];
    const mockBridge = ["U", "D", "U"];
    const moveResult = [];
    const bridgeGame = new BridgeGame();

    mockMakeBridge(mockBridge);
    bridgeGame.makeBridge(BRIDGE_SIZE);

    // when
    DIRECTIONS.forEach((direction, round) => {
      mockIsMovable(mockBridge, round, direction);
      const { map } = bridgeGame.move(round, direction);

      if (round === BRIDGE_SIZE - 1) {
        moveResult.push(...map);
      }
    });

    // then
    expect(moveResult).toEqual([
      ["U", true],
      ["D", true],
      ["D", false],
    ]);
  });
});

describe("isLastRound 메서드 테스트", () => {
  test("마지막 라운드인지 확인할 수 있어야 한다.", () => {
    // given
    const ROUND = 3;
    const MOCK_BRIDGE = ["U", "D", "U"];
    const bridgeGame = new BridgeGame();

    bridgeGame.makeBridge(MOCK_BRIDGE.length);
    mockBridgeSize(MOCK_BRIDGE);

    // when
    const isLast = bridgeGame.isLastRound(ROUND);

    // then
    expect(isLast).toBe(true);
  });

  test("마지막 라운드가 아니라면 false를 반환해야 한다.", () => {
    // given
    const ROUND = 1;
    const MOCK_BRIDGE = ["U", "D", "U"];
    const bridgeGame = new BridgeGame();

    bridgeGame.makeBridge(MOCK_BRIDGE.length);
    mockBridgeSize(MOCK_BRIDGE);

    // when
    const isLast = bridgeGame.isLastRound(ROUND);

    // then
    expect(isLast).toBe(false);
  });
});

describe("retry 메서드 테스트", () => {
  test("입력이 재시작(R)이나 종료(Q)가 아니라면 예외를 발생시켜야 한다.", () => {
    // given
    const commands = ["A", 0, undefined, "ABC"];
    const bridgeGame = new BridgeGame();

    // when
    const retry = (command) => {
      bridgeGame.retry(command);
    };

    // then
    commands.forEach((command) => {
      expect(() => retry(command)).toThrow("[ERROR]");
    });
  });

  test("입력이 재시작(R)이라면 true를 반환한다.", () => {
    // given
    const command = "R";
    const bridgeGame = new BridgeGame();

    // when
    const isRetry = bridgeGame.retry(command);

    // then
    expect(isRetry).toBe(true);
  });

  test("입력이 종료(Q)라면 false를 반환한다.", () => {
    // given
    const command = "Q";
    const bridgeGame = new BridgeGame();

    // when
    const isRetry = bridgeGame.retry(command);

    // then
    expect(isRetry).toBe(false);
  });
});

describe("getGameResult 메서드 테스트", () => {
  test("게임 결과를 반환할 수 있어야 한다.", () => {
    // given
    const bridgeGame = new BridgeGame();
    const mockBridge = ["U", "D", "U"];
    const moveResult = [];

    mockMakeBridge(mockBridge);
    mockBridgeSize(mockBridge);
    bridgeGame.makeBridge(mockBridge.length);

    mockBridge.forEach((direction, round) => {
      mockIsMovable(mockBridge, round, direction);
      const { map } = bridgeGame.move(round, direction);

      if (round === mockBridge.length - 1) {
        moveResult.push(...map);
      }
    });

    // when
    const gameResult = bridgeGame.getGameResult();

    // then
    expect(gameResult).toEqual({
      map: [
        ["U", true],
        ["D", true],
        ["U", true],
      ],
      attempts: 1,
      isSuccess: true,
    });
  });
});
