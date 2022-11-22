const RETRY_LETTER = "R";
const END_LETTER = "Q";

const Validate = {
  retry(inputLetter) {
    if (inputLetter !== RETRY_LETTER && inputLetter !== END_LETTER)
      throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
  },
};

module.exports = Validate;
