const INPUT_MESSAGES = {
  INPUT_BRIDGESIZE: '다리의 길이를 입력해주세요.\n',
  INPUT_MOVE: '이동할 칸을 선택해주세요. (위: U, 아래:D)\n',
  INPUT_RETRY: '게임을 종료합니다.게임을 재시도하려면 R, 종료하려면 Q를 눌러주세요.',
};

const OUTPUT_MESSAGES = {
  OUTPUT_FINALCOUNT(count) {
    return `최종 시도 횟수 : ${count}`;
  },
  OUTPUT_STARTGAME: '다리 건너기 게임을 시작합니다.',
};
const ERROR_MESSAGES = {
  ERROR_INVAILD_INPUT(word1, word2) {
    return `${word1} 와 ${word2} 둘 중에 하나의 문자를 입력하세요.`;
  },
};
module.exports = {
  INPUT_MESSAGES,
  OUTPUT_MESSAGES,
  ERROR_MESSAGES,
};
