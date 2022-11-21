const cmd = {
  UP:"U",
  DOWN : "D",
  RETRY : "R",
  QUIT : "Q",
}

const gameConst = {
  process: {
    START_MESSAGE: "다리 건너기 게임을 시작합니다.",
    INPUT_LENGTH_MESSAGE: "다리의 길이를 입력해주세요.",
    INPUT_CHOOSE_MESSAGE: `이동할 칸을 선택해주세요. (위: ${cmd.UP}, 아래: ${cmd.DOWN})`,
    INPUT_RESART_MESSAGE:
      `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${cmd.RETRY}, 종료: ${cmd.QUIT})`,
  },
  result: {
    message: {
      RESULT_MESSAGE: "최종 게임 결과",
      SUCCESS_MESSAGE: "게임 성공 여부:",
      TRIAL_MESSAGE: "총 시도한 횟수:",
    },
    value: {
      FAIL: "실패",
      SUCCESS: "성공",
    },
  },
  sign:{
    O_SIGN:"O",
    X_SIGN:"X",
    BLANK_SIGN:" "
  },
  error:{
    BRIDGE_ERROR :"[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
    MOVE_COMMAND_ERROR : `[ERROR] ${cmd.UP} 또는 ${cmd.DOWN}를 입력해주세요.`,
    RETRY_COMMAND_ERROR : `[ERROR] ${cmd.QUIT} 또는 ${cmd.RETRY}를 입력해주세요.`
  },
  cmd
};

module.exports = gameConst;
