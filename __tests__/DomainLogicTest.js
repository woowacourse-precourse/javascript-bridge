const BridgeGame = require('../src/Bridge/BridgeGame');
const BridgeMap = require('../src/Bridge/BridgeMap');
const Validator = require('../src/Utils/Validator');

describe('도메인 로직 테스트 Validator 객체', () => {
  test('입력 값 사이의 공백이 있으면 에러를 throw한다', () => {
    const result = () => Validator.checkSpace('2 3');
    const answer = Validator.ERROR_MESSAGES.NOT_EMPTY;

    expect(result).toThrow(answer);
  });

  test('입력값이 NaN타입이면 에러를 throw한다', () => {
    const inputs = ['asd', '!!@#!$', '2.32132.4.41,4szxc'];

    const answer = Validator.ERROR_MESSAGES.NOT_NAN;

    inputs.forEach((input) => {
      expect(() => Validator.checkNan(input)).toThrow(answer);
    });
  });

  test('입력값과 컨디션을 인수로 받아 다른 checkCondition 기능 을 실행시킨다', () => {
    const inputs = ['R', 'Q', 'D', 'U'];
    const conditions = ['option', 'option', 'move', 'move'];
    const answer = true;

    inputs.forEach((input, i) => {
      expect(Validator.confirmByCondition(input, conditions[i])).toBe(answer);
    });
  });

  test('입력값과 조건배열 에러 메세지를 인수로 받아 해당 조건배열의 값이 아니라면 에러를 throw한다', () => {
    const conditions = [
      ['Q', 'R'],
      ['U', 'D'],
    ];
    const errorMessages = [Validator.ERROR_MESSAGES.ONLY_R_Q, Validator.ERROR_MESSAGES.ONLY_U_D];
    const inputs = ['U', 'Q'];

    inputs.forEach((input, i) => {
      expect(() => Validator.checkCondition(input, conditions[i], errorMessages[i])).toThrow(
        errorMessages[i],
      );
    });
  });

  test('다리길이에 대한 input 의 검증을 위한 checkSpace,checkNan,checkRange 가 true면 true를 반환한다.', () => {
    const inputs = ['4', '10', '20', '3'];
    const answer = true;

    inputs.forEach((input) => {
      expect(Validator.checkBridgeLengthInput(input)).toBe(answer);
    });
  });

  test('입력값이 3,20 범위 가 아니라면 에러를 throw한다', () => {
    const inputs = [2, 21];

    const answer = Validator.ERROR_MESSAGES.RANGE_ERROR;

    inputs.forEach((input) => {
      expect(() => Validator.checkRange(input)).toThrow(answer);
    });
  });
});

describe('도메인 로직테스트 BridgeGame class', () => {
  const bridgeGame = new BridgeGame();

  test('입력값과 다리를 비교하여 갈수있는길이면 true 아니면 false를 의사결정 한다', () => {
    const inputs = ['D', 'U', 'U', 'D'];
    const bridge = ['D', 'D', 'D', 'D'];
    const answers = [true, false, false, true];

    inputs.forEach((input, i) => {
      expect(bridgeGame.move(input, bridge)).toBe(answers[i]);
    });
  });

  test('입력값에 따라 retry 면 true 아니면 false 를 의사결정 한다', () => {
    const inputs = ['R', 'Q'];
    const answers = [true, false];

    inputs.forEach((input, i) => {
      expect(bridgeGame.retry(input)).toBe(answers[i]);
    });
  });
});

describe('도메인 로직 테스트  BridgeMap class', () => {
  test('전달받은 moveStatement와 input을 addMap에 전달하고 처음 실행인지 아닌지 의사결정하는 기능', () => {
    const bridgeMap = new BridgeMap();
    const moveStatements = [true, false];
    const inputs = ['D', 'D'];
    const answers = ['isFirst', 'isNotFirst'];

    moveStatements.forEach((moveStatement, i) => {
      expect(bridgeMap.handleMap(moveStatement, inputs[i])).toBe(answers[i]);
    });
  });

  test('전달된 boolean과 class의 isFirst 상태에 따라 addCorrect와 addIncorrect 를 실행 시킬지 결정하는 기능', () => {
    const bridgeMap = new BridgeMap();
    const moveStatement = true;
    const input = 'D';
    const answer = [['   '], [' O ']];

    expect(bridgeMap.addMap(moveStatement, input)).toEqual(answer);
  });
});
