const START_MESSAGE = {
  START: "다리 건너기 게임을 시작합니다.\n",
};

const ERROR_MESSAGE = {
  SIZE: "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVE: "[ERROR] 이동할 칸은 'U' 또는 'D' 여야 합니다.",
  RETRY: "[ERROR] 게임 재시작/종료 여부는 'R' 또는 'Q' 여야 합니다.",
};

const INPUT_MESSAGE = {
  SIZE: "다리의 길이를 입력해주세요.\n",
  MOVE: "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY: "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const OUTPUT_MESSAGE = {
  HEADER: "\n최종 게임 결과",
  SUCCESS: "\n게임 성공 여부: ",
  TRIED: "총 시도한 횟수: ",
}

const MAKE_MAP = {
  START: "[",
  PASSED: " O |",
  EMPTY: "   |",
  END_EMPTY: "   ]",
  END_FAIL: " X ]",
  END_SUCCES: " O ]",
}

const SUCCESS = {
  true: '성공',
  false: '실패',
}

const MOVE_VALID = ['U', 'D'];
const RETRY_VALID = ['R', 'Q'];

module.exports = {
  START_MESSAGE,
  ERROR_MESSAGE, 
  INPUT_MESSAGE,
  OUTPUT_MESSAGE,
  MAKE_MAP,
  MOVE_VALID, 
  RETRY_VALID,
  SUCCESS,
};