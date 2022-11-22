const GameCommand = require('../src/domain/GameCommand');
const GameCommandException = require('../src/exception/GameCommandException');

describe('GameCommand 클래스 테스트', () => {
  test.each([['U'], ['D'], ['r'], ['q']])(
    '길이가 조건에 부합하지 않는 경우 예외처리',
    (command) => {
      expect(() => {
        GameCommand.validate(command);
      }).toThrow(GameCommandException);
    },
  );
  
  test.each([['R', true], ['Q', false]])(
    '재시도인지 확인하는 함수',
    (command, result) => {
      expect(GameCommand.isRetry(command)).toEqual(result);
    },
  );
  test.each([['R', false], ['Q', true]])(
    '종료인지 확인하는 함수',
    (command, result) => {
      expect(GameCommand.isQuit(command)).toEqual(result);
    },
  );
});
