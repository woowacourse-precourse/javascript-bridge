const InputMessage = {
  BRIDGE_SIZE : "\n다리의 길이를 입력해주세요.\n",
  MOVING_DIRECTION : "\n이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  RETRY_OR_QUIT : "\n게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
};

const ErrorMessage = {
  MINIMUM_SIZE_RANGE: 3,
  MAXIMUM_SIZE_RANGE: 20,
  IS_NOTNUMBER: "[ERROR] 다리 길이는 숫자여야합니다.",
  BRIDGE_SIZE : "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.",
  MOVING_DIRECTION : "[ERROR] U(위 칸)와 D(아래 칸) 중 하나의 문자만 입력할 수 있습니다.",
  RETRY_OR_QUIT : "[ERROR] (재시작)과 Q(종료) 중 하나의 문자만 입력할 수 있습니다.",
};

const OutputMessage = {
  START : "다리 건너기 게임을 시작합니다.",
  RESULT_TITLE : `\n최종 게임 결과`,
  FORMAT : (content) => `[ ${content.join(" | ")} ]`,
  RESULT : (isSuccess) => `\n게임 성공 여부: ${isSuccess? "성공" : "실패"}`,
  TRY_NUMBER : (tryCnt) => `총 시도한 횟수: ${tryCnt}`, 
}

module.exports = { InputMessage, ErrorMessage, OutputMessage };
