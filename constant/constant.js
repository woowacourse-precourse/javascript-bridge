const cmd = {
    UP_CMD:"U",
    DOWN_CMD : "D",
    RETRY_CMD : "R",
    QUIT_CMD : "Q",
  }
  
  const gameConst = {
    process: {
      START_MESSAGE: "다리 건너기 게임을 시작합니다.",
      INPUT_LENGTH_MESSAGE: "다리의 길이를 입력해주세요.",
      INPUT_CHOOSE_MESSAGE: `이동할 칸을 선택해주세요. (위: ${cmd.UP_CMD}, 아래: ${cmd.DOWN_CMD})`,
      INPUT_RESART_MESSAGE:
        `게임을 다시 시도할지 여부를 입력해주세요. (재시도: ${cmd.RETRY_CMD}, 종료: ${cmd.QUIT_CMD})`,
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
      MOVE_COMMAND_ERROR : `[ERROR] ${cmd.UP_CMD} 또는 ${cmd.DOWN_CMD}를 입력해주세요.`,
      RETRY_COMMAND_ERROR : `[ERROR] ${cmd.QUIT_CMD} 또는 ${cmd.RETRY_CMD}를 입력해주세요.`
    },
    cmd
  };
  
  module.exports = gameConst;