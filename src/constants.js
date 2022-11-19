const MIN_BRIDGE_SIZE = 3;
const MAX_BRIDGE_SIZE = 20;

const OUTPUT_MSG = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.'
});
const QUESTIONS = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.'
});
const ERROR_MSG = Object.freeze({
  invalidBridgeSize: `[ERROR] 다리 길이는 ${MIN_BRIDGE_SIZE} 이상 ${MAX_BRIDGE_SIZE}이하의 숫자를 입력해주세요`
});

module.exports = {
  OUTPUT_MSG,
  QUESTIONS,
  ERROR_MSG,
  MAX_BRIDGE_SIZE,
  MIN_BRIDGE_SIZE
};
