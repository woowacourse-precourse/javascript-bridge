/**
 * 객체
 * 유효성 체크 기능
 * 코드 짜다가 검증 필요없는 validation 삭제하기
 */

const Validation = {
  bridgeLength() {
    //다리 길이 :
    // 타입: 숫자
    // 범위: 3~20
  },
  bridgeFormat() {},
  // ?
  // 다리 array 개별 타입이 0나 1이 아니면 에러,
  // 길이와 입력 개수가 같은지
  moveFormat() {
    // U나 D가 아닐 경우 -> U나 D만 입력하라고 하기
  },
  selectFormat() {
    //R,Q가 아닌 경우 -> RQ만 입력하라 하기
  },
};

module.exports = Validation;
