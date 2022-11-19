const MIN_BRIDGE_SIZE = 3;
const MAX_BRIDGE_SIZE = 20;
const POSITIONS = ['D', 'U'];

const OUTPUT_MSG = Object.freeze({
  start: '다리 건너기 게임을 시작합니다.'
});
const QUESTIONS = Object.freeze({
  bridgeSize: '다리의 길이를 입력해주세요.',
  movePosition: '이동할 칸을 선택해주세요. (위: U, 아래: D)'
});
const ERROR_MSG = Object.freeze({
  invalidBridgeSize: `[ERROR] 다리 길이는 ${MIN_BRIDGE_SIZE} 이상 ${MAX_BRIDGE_SIZE}이하의 숫자를 입력해주세요`,
  invalidPosition: '[ERROR] 위: U, 아래: D 를 입력해주세요.'
});

module.exports = {
  OUTPUT_MSG,
  QUESTIONS,
  ERROR_MSG,
  MAX_BRIDGE_SIZE,
  MIN_BRIDGE_SIZE,
  POSITIONS
};
