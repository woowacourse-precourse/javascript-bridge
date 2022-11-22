/* eslint no-use-before-define: 0 */
/* eslint no-undef: "off" */
/* eslint no-new: "off" */
/* eslint max-lines-per-function: "off" */

const BridgeGame = require('../../src/BridgeGame');
const Bridge = require('../../src/Model/Bridge');
const Selected = require('../../src/Model/Selected');
const TryCnt = require('../../src/Model/TryCnt');

const { generate } = require('../../src/BridgeRandomNumberGenerator');

describe('Game 유닛 테스트', () => {
  let game;
  beforeEach(() => {
    game = new BridgeGame(new Selected(), new TryCnt());
  });
  test('totalLevel getter 테스트 : 생성할때 입력한 Bridge의 길이와 totalLevel이 같다.', () => {
    const numberInput = 3;

    expect(game.totalLevel).toBe(0);
    game.createBridge(new Bridge(numberInput, generate));

    expect(game.totalLevel).toBe(3);
  });

  test('levelCnt getter 테스트 : move 전의 levelCnt는 0, move를 반복한 수와 levelCnt의 값이 같다.', () => {
    const inputArray = ['U', 'D', 'U'];

    expect(game.levelCnt).toBe(0);
    inputArray.forEach((input) => game.move(input));

    expect(game.levelCnt).toBe(3);
  });
  test('tryNumber getter 테스트 : 처음 tryCnt는 1, 시도횟수 +1이 tryNumber를 통해 출력', () => {
    const cnt = 1;

    expect(game.tryNumber).toBe(cnt);
    game.retry();

    expect(game.tryNumber).toBe(cnt + 1);
  });
  test('result getter 테스트: 빈 이중배열로 초기화되며, 일치하는 값에 맞게 result가 출력', () => {
    const numberInput = 3;
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const inputArray = ['U', 'D', 'D'];
    const result = [
      [true, undefined, undefined],
      [undefined, true, true],
    ];

    expect(game.result).toStrictEqual([[], []]);
    game.createBridge(new Bridge(numberInput, mockGenerator));
    inputArray.forEach((input) => game.move(input));

    expect(game.result).toStrictEqual(result);
  });

  test('createBridge 메소드 테스트: createBridge를 통해 생성 후 totalLevel을 통해 생성여부 확인', () => {
    const inputNumber = 3;

    game.createBridge(new Bridge(inputNumber, generate));

    expect(game.totalLevel).toBe(inputNumber);
  });
  test('isRemoving 메소드 테스트: 총 bridge의 length보다 입력값이 작으면 true', () => {
    const inputNumber = 3;
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());

    game.createBridge(new Bridge(inputNumber, mockGenerator));

    game.move('U');

    expect(game.isReMoving()).toBe(true);
  });
  test('isEnd 메소드 테스트: input의 값을 넣지 않으면 false input값과 bridge가 맞아떨어지면 true', () => {
    const inputNumber = 3;
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const inputArray = ['U', 'D', 'D'];

    game.createBridge(new Bridge(inputNumber, mockGenerator));

    expect(game.isEnd()).toBe(false);
    inputArray.forEach((input) => game.move(input));
    expect(game.isEnd()).toBe(true);
  });
  test('isWin 메소드 테스트:input 값이 없으면 false, input과 bridge가 맞아떨어지면 true', () => {
    const inputNumber = 3;
    const randomNumbers = [1, 0, 0];
    const mockGenerator = randomNumbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, jest.fn());
    const inputArray = ['U', 'D', 'D'];

    game.createBridge(new Bridge(inputNumber, mockGenerator));

    expect(game.isWin()).toBe(false);
    inputArray.forEach((input) => game.move(input));
    expect(game.isWin()).toBe(true);
  });

  test('move 메소드 테스트: move를 실행한 만큼 levelCnt값이 증가한다.', () => {
    const array = ['U', 'D', 'U'];
    array.forEach((el) => game.move(el));

    expect(game.levelCnt).toBe(array.length);
  });
  test('retry 메소드 테스트: retry를 실행 후 tryCnt값이 1증가, level은 0으로 초기화된다', () => {
    const tryCnt = game.tryNumber;
    const array = ['U', 'D', 'U'];
    array.forEach((el) => game.move(el));
    game.retry();

    expect(game.tryNumber).toBe(tryCnt + 1);
    expect(game.levelCnt).toBe(0);
  });
});
