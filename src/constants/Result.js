const RESULT = Object.freeze({
  title: '최종 게임 결과',
  successOrFailure: (result) => `게임 성공 여부: ${result}`,
  attempts: (attempts) => `총 시도한 횟수: ${attempts}`,
});

module.exports = RESULT;
