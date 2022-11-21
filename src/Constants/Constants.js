const PROMPT = {
  START : "다리 건너기 게임을 시작합니다.\n",
  READ_SIZE : "다리의 길이를 입력해주세요.\n",
  READ_MOVING : "이동할 칸을 선택해주세요. (위: U, 아래: D)\n",
  READ_COMMAND : "게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)\n",
}

const COMMAND = {
  UP : "U",
  DOWN : "D",
  RETRY : "R",
  QUIT : "Q",
}

const WORD = {
  CORRECT : "O",
  WRONG : "X",
  EMPTY : " ",
  NEW_LINE : "\n",
  LEFT_BRACKET : "[",
  RIGHT_BRACKET : "]",
  BAR : "|"
}

const ERROR = {
  SIZE_ERROR : "[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.\n",
  MOVING_ERROR : "[ERROR] 위나 아래로 이동하려면 U나 D를 입력해야 합니다.\n",
}

module.exports = { PROMPT, COMMAND, WORD, ERROR };