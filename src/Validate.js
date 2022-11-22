const RETRY_LETTER = "R";
const END_LETTER = "Q";

const Validate = {
  bridgeSize(bridgeLength) {
    if (bridgeLength < 3 || bridgeLength > 20) {
      throw new Error("[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.");
    }
  },

  retry(inputLetter) {
    if (inputLetter !== RETRY_LETTER && inputLetter !== END_LETTER)
      throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
  },
};

module.exports = Validate;
