const GAME_NUMBER = Object.freeze({
  min: 3,
  max: 20,
})

const INPUT_QUESTION = Object.freeze({
  bridgeLen: '다리의 길이를 입력해주세요.\n',
});

const ERROR_MESSAGE = Object.freeze({
  form: "[ERROR] 잘못된 입력값 입니다.",
  notNumber: "[ERROR] 숫자가 아닌 값을 입력하였습니다. 3 이상 25 이하의 숫자를 입력해주세요.",
  range: "[ERROR] 3 이상 20 이하의 숫자를 입력해주세요.",
});

module.exports = {
  INPUT_QUESTION,
  ERROR_MESSAGE,
  GAME_NUMBER,
}
