const MESSAGE =Object.freeze({
  START: '다리 건너기 게임을 시작합니다.',
  BRIDGE_SIZE:'다리의 길이를 입력해주세요.',
  MOVE_MESSAGE:'이동할 칸을 선택해주세요. (위: U, 아래: D)',
  RESTART_MESSAGE:'게임을 다시 시도할지 여부를 입력해주세요. (재시도: R, 종료: Q)',
});

const KEY=Object.freeze({
  MOVE_UP:'U',
  MOVE_DOWN:'D',
  RESTART:'R',
  END:'Q',
});

module.exports=Object.freeze({
  MESSAGE,
  KEY,
});