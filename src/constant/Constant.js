
const REQUIREMENT = {
  MINLEN: 3,
  MAXLEN: 20,
  UP: 'U',
  DOWN: 'D',
  RETRY: 'R',
  QUIT: 'Q',
  CANMOVE: 'O',
  CANNOTMOVE: 'X',
  BRIDGEDELIMETER: '|',
  BRIDGESTART: '[',
  BRIDGEEND: ']',
};

const MESSAGE = {
  INIT: '다리 건너기 게임을 시작합니다.\n',
  INPUTBRIDGELENGTH: '다리의 길이를 입력해주세요.\n',
  INPUTMOVINGLOCATION: `\n이동할 칸을 선택해주세요. (위: ${REQUIREMENT.UP}, 아래:${REQUIREMENT.DOWN})\n`,
  INPUTRETRYORQUIT: `\n게임을 다시 시도할지 입력해주세요. (재시도: ${REQUIREMENT.RETRY}, 종료:${REQUIREMENT.QUIT})\n`,
  RESULT: '\n최종 게임 결과',
  SUCCESSORNOT: '게임 성공 여부: ',
  SUCCESS : '성공',
  FAIL: '실패',
  TOTALATTEMPTS: '총 시도한 횟수: ',
};

const ERROR = {
  LENGTH: `[ERROR] 다리 길이는 ${REQUIREMENT.MINLEN}부터 ${REQUIREMENT.MAXLEN} 사이의 숫자여야 합니다.`,
  MOVE: `[ERROR] 이동할 칸은 ${REQUIREMENT.UP}와 ${REQUIREMENT.DOWN}로 입력해야 합니다.`,
  RETRY: `[ERROR] 재시작 여부는 ${REQUIREMENT.RETRY}와 ${REQUIREMENT.QUIT}로 입력해야 합니다.`,
}

module.exports = { MESSAGE, REQUIREMENT, ERROR };
