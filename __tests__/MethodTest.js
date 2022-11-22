const { Console } = require("@woowacourse/mission-utils");
const BridgeValidtion = require('../src/Validtion');
const User = require('../src/User');

afterAll(() => Console.close());

describe("에러 테스트", () => {
  test('3~20의 다리길이가 입력되지 않았을 때 오류를 던지는지 ', () => {
    const bridgeLength = [0, 2, 21];

    bridgeLength.forEach((bridge) => {
      expect(() => BridgeValidtion.validateBridge(bridge)).toThrow('[ERROR]');
    });
  });
  test('숫자가 들어오지 않았을 경우 오류를 던지는지 ', () => {
    const bridgeLength = ['a', '1a', ' '];

    bridgeLength.forEach((bridge) => {
      expect(() => BridgeValidtion.validateBridge(bridge)).toThrow('[ERROR]');
    });
  });

  test('건너갈 다리의 입력값이 U 와 D 가 아닐경우 오류를 던지는지 ', () => {
    const userInput = ['X', ' ', '.', '0'];

    userInput.forEach((input) => {
      expect(() => BridgeValidtion.validateSelect(input)).toThrow('[ERROR]');
    });
  });

  test('건너갈 다리의 입력값이 생성된 다리와 같을때와 다를때 참 거짓을 잡아주는지', () => {
    const user = new User();
    const input = ['U', 'D'];
    const bridge = ['U', 'U'];

    expect(user.whetherHasCan(input[0], bridge)).toBeTruthy();
    expect(user.whetherHasCan(input[1], bridge)).toBeFalsy();
  });
  test('건널 수 있는 다리 일 때 O와 선택하지않은 다리는 공백을 넣어주는지', () => {
    const user = new User();
    const input = 'U';

    expect(user.willGo(input)).toEqual([[' O '], ['   ']]);
  });
  test('건널 수 없는 다리 일 때 X와 선택하지않은 다리는 공백을 넣어주는지', () => {
    const user = new User();
    const input = 'U';

    expect(user.willNotGo(input)).toEqual([[' X '], [ '   ']]);
  });

  test('실패시 재시작(R) 과 종료(Q) 외에 다른것을 입력한다면 오류를 던지는지', () => {
    const selectList = ['a,', ' ', 'RR'];

    selectList.forEach((select) => {
      expect(() => BridgeValidtion.validateResult(select)).toThrow('[ERROR]');
    });
  });
});
