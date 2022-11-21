const Validation = require('../src/Model/Validation');

describe('입력값 유효성 검사 테스트', () => {
  test.each([0, 21, 'a', '', ' ', '.'])('다리길이가 3에서 20 사이의 수가 아니라면 예외 처리',
  (sizeInput) => {
    expect(() => {
      Validation.checkBridgeLength(sizeInput);
    }).toThrow('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
  });

  test.each([1, 'a', 'u', 'd', '', ' ', '.'])('이동할 칸 입력이 U 또는 D가 아니라면 예외 처리',
  (moveInput) => {
    expect(() => {
      Validation.checkMoveInput(moveInput);
    }).toThrow('[ERROR] U와 D중 하나의 문자를 입력해주세요.');
  });

  test.each([1, 'a', 'r', 'q', '', ' ', '.'])('개임 재시작 혹은 종료 여부 입력이 R 또는 Q가 아니라면 예외 처리',
  (retryInput) => {
    expect(() => {
      Validation.checkRestartInput(retryInput);
    }).toThrow('[ERROR] R과 Q중 하나의 문자를 입력해주세요.');
  });
});