const InputView = require('../src/InputView');

describe('InputView 기능 테스트', () => {
  test('다리 길이 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    try {
      InputView.handleBridgeSizeException('45');
    } catch (error) {
      expect(error).toEqual(
        '[ERROR] 다리 길이는 3부터 20 사이의 자연수여야 합니다.'
      );
    }
  });

  test('이동 방향 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다.', () => {
    try {
      InputView.handleMovingException('Up');
    } catch (error) {
      expect(error).toEqual(
        '[ERROR] 이동할 칸은 영문 대문자 U나 D만 입력할 수 있습니다.'
      );
    }
  });

  test('게임 커맨드 입력 시 유효하지 않은 값을 입력하면 예외가 발생한다', () => {
    try {
      InputView.handleGameCommandException('Quit');
    } catch (error) {
      expect(error).toEqual(
        '[ERROR] 종료 및 재시작 명령어는 영문 대문자 R이나 Q만 입력할 수 있습니다.'
      );
    }
  });
});
