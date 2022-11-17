const BridgeGameError = require('../BridgeGameError');
const ErrorMessages = require('../constants/ErrorMessages');

/**
 * Regex의 테스트를 통과하지 못하면 에러를 던지는 함수
 *
 * @param {string} text 테스트 대상 문자열
 * @param {RegExp} regExp RegExp 규칙
 * @param {string} message 출력할 에러 메시지
 */
const regexpValidation = (text, regExp, message) => {
  if (!regExp.test(text)) throw new BridgeGameError(message);
};

/**
 * 위 또는 아래, 재시도 또는 종료의 입력에 대해 검증하는 함수
 *
 * @param {string} input 검증 대상 문자열
 * @param {'DIRECTION' | 'GAMESTATUS'} validationType DIRECTION: 위 또는 아래 이동, GAME: 재시도 또는 종료
 */
const Game = (input, validationType) => {
  const upDownRegExp = /[U,D]/g;
  const retryExitRegExp = /[R,Q]/g;

  if (input.length !== 1) throw new BridgeGameError(ErrorMessages.GAME_LENGTH);

  if (validationType === 'DIRECTION') regexpValidation(input, upDownRegExp, ErrorMessages.UPDOWN);

  if (validationType === 'GAMESTATUS')
    regexpValidation(input, retryExitRegExp, ErrorMessages.RETRYEXIT);
};

module.exports = Game;
