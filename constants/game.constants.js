const BRIDGE = {
    UP: 'U',
    DOWN: 'D',
    ABLE: 'O',
    UNABLE: 'X',
    START: '[',
    END: ']',
    DIVISION: ' | ',
  };
  
  const GAME_MESSAGE = {
    START: '다리 건너기 게임을 시작합니다.\n',
    LENGTH_INPUT: '다리의 길이를 입력해주세요.\n',
    UPDOWN_INPUT: '이동할 칸을 선택해주세요. (위: U, 아래: D)\n',
    RETRY_INPUT:
      '게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n',
    RESULT: '최종 게임 결과',
    SUCCESS_OR_NOT: '게임 성공 여부: ',
    TRY_NUMBER: '총 시도한 횟수: ',
    SUCCESS: '성공\n',
    FAIL: '실패\n',
  };

  const INPUT_MESSAGE ={
    RETRY : 'R',
    QUIT : 'Q',
  };

  const RANGE = {
    MIN : 3,
    MAX : 20,
  };
  
  module.exports = { BRIDGE, GAME_MESSAGE, INPUT_MESSAGE, RANGE };
  