const { GameCommand } = require('../src/models/command');

describe('커맨드 클래스 테스트', () => {
  test.each([[''], [' '], ['a'], ['2']])(
    '게임 커맨드 값이 R 또는 Q가 아닌 경우 예외 처리',
    (command) => {
      expect(() => {
        new GameCommand(command);
      }).toThrow('[ERROR] 재시도 여부 입력값은 R 또는 Q여야 합니다.');
    },
  );
});
