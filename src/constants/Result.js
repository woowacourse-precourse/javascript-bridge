const RESULT = Object.freeze({
  title: '최종 게임 결과\n',
  successOrFailure: (result) => `게임 성공 여부: ${result}\n`,
  attempts: (attempts) => `게임 성공 여부: ${attempts}\n`,
});

module.exports = RESULT;
