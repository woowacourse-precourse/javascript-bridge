const BridgeGameError = require('../BridgeGameError');
const ErrorMessages = require('../constants/ErrorMessages');

/**
 * 인자가 3 ~ 20사이인지 확인하는 함수
 *
 * @param {number} number
 * @returns {boolean}
 */
const isBetweenThreeOrTwenty = (number) => number >= 3 && number <= 20;

/**
 * 다리 길이 입력에 대해 겁증하는 함수
 *
 * @param {string} input 검증 대상 문자열
 */
const Bridge = (input) => {
  const number = Number(input);

  if (Number.isNaN(number)) throw new BridgeGameError(ErrorMessages.DATA_TYPE);

  if (!isBetweenThreeOrTwenty(number)) throw new BridgeGameError(ErrorMessages.BRIDGE_LENGTH);
};

module.exports = Bridge;
