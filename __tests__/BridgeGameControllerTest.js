const BridgeGameController = require('../src/BridgeGameController');
const BridgeGameModel = require('../src/BridgeGameModel');
const { MOVE, COMMAND } = require('../src/Constants');
const {
  isCurrentLastIndexValueSame,
  isLengthSame,
} = require('../src/Validation');

const model = new BridgeGameModel();
const controller = new BridgeGameController(model);
model.setBridgeSize(4); // 길이가 4인 다리로 테스트 작성

const getModelUserMove = (userMove) => {
  userMove.forEach((step) => {
    model.setUserMove(step);
  });

  return model.getUserMove();
};

describe('다리 건너기 컨트롤러 테스트', () => {
  beforeEach(() => {
    model.initialize();
  });

  test('현재 결과값 받아오기 테스트 1', () => {
    // 이 때까지 입력한 값들이 전부 맞았지만, 길이는 다른 경우(끝까지 다 맞추지는 않은 경우)
    const bridge = model.getBridge();
    const userMove = bridge.slice(0, 3);
    const modelUserMove = getModelUserMove(userMove);

    controller.setCurrentResult();

    expect(model.getIsSuccess()).toBe(false);
    expect(isCurrentLastIndexValueSame(bridge, modelUserMove)).toBe(true);
    expect(isLengthSame(bridge, modelUserMove)).toBe(false);
  });

  test('현재 결과값 받아오기 테스트 2', () => {
    // 끝까지 전부 맞춘 경우
    const bridge = model.getBridge();
    const modelUserMove = getModelUserMove(bridge);

    controller.setCurrentResult();

    expect(model.getIsSuccess()).toBe(true);
    expect(isCurrentLastIndexValueSame(bridge, modelUserMove)).toBe(true);
    expect(isLengthSame(bridge, modelUserMove)).toBe(true);
  });

  test('현재 결과값 받아오기 테스트 3', () => {
    // 중간에 입력하다가 값을 틀린 경우
    const bridge = model.getBridge();
    let wrongStep;

    if (bridge[2] === MOVE.up) wrongStep = MOVE.down;
    if (bridge[2] === MOVE.down) wrongStep = MOVE.up;

    const userMove = [...bridge.slice(0, 2), ...[wrongStep]];
    const modelUserMove = getModelUserMove(userMove);

    controller.setCurrentResult();

    expect(model.getIsSuccess()).toBe(false);
    expect(isCurrentLastIndexValueSame(bridge, modelUserMove)).toBe(false);
    expect(isLengthSame(bridge, modelUserMove)).toBe(false);
  });

  test('현재 결과값 받아오기 테스트 3', () => {
    // 끝까지 잘 입력하다가 가장 마지막 move에서 틀린 경우
    const bridge = model.getBridge();

    let wrongStep;

    if (bridge[3] === MOVE.up) wrongStep = MOVE.down;
    if (bridge[3] === MOVE.down) wrongStep = MOVE.up;

    const userMove = [...bridge.slice(0, 3), ...[wrongStep]];
    const modelUserMove = getModelUserMove(userMove);

    controller.setCurrentResult();

    expect(model.getIsSuccess()).toBe(false);
    expect(isCurrentLastIndexValueSame(bridge, modelUserMove)).toBe(false);
    expect(isLengthSame(bridge, modelUserMove)).toBe(true);
  });
});

describe('유효성 검사 후 모델에 데이터 저장 확인 테스트', () => {
  let storeSuccess = false;

  beforeEach(() => {
    model.initialize();
    storeSuccess = false;
  });

  test('유저가 다리 사이즈를 정확하게 입력했을 경우', () => {
    const MOCK_SIZE = 20;

    controller.setUserBridgeSize(MOCK_SIZE, () => {
      storeSuccess = true;
    });

    expect(model.getBridge().length).toBe(MOCK_SIZE);
    expect(storeSuccess).toBe(true);
  });

  test('유저가 움직이는 방향(U, D)를 정확하게 입력했을 경우', () => {
    controller.setUserMoving(MOVE.up, () => {
      storeSuccess = true;
    });

    expect(model.getStep()).toEqual(MOVE.up);
    expect(storeSuccess).toBe(true);
  });

  test('유저가 명령어(R, Q)를 정확하게 입력했을 경우', () => {
    controller.setUserCommand(COMMAND.quit, () => {
      storeSuccess = true;
    });

    expect(model.getCommand()).toEqual(COMMAND.quit);
    expect(storeSuccess).toBe(true);
  });
});

describe('예외 처리로 데이터가 안 담기는 지 테스트', () => {
  let storeSuccess = false;
  let wrongInput = ['S', 'X', 'u', 'd', 'r', 'q', '5', 'I'];

  beforeEach(() => {
    model.initialize();
    storeSuccess = false;
  });

  test('유저가 움직이는 방향(U, D)을 정확하지 않게 입력했을 경우', () => {
    wrongInput.forEach((input) => {
      controller.setUserMoving(input, () => {
        storeSuccess = true;
      });

      expect(model.getStep().length).toEqual(0);
      expect(storeSuccess).toBe(false);
    });
  });

  test('유저가 명령어(R, Q)을 정확하지 않게 입력했을 경우', () => {
    wrongInput.forEach((input) => {
      controller.setUserCommand(input, () => {
        storeSuccess = true;
      });

      expect(model.getCommand().length).toEqual(0);
      expect(storeSuccess).toBe(false);
    });
  });
});
