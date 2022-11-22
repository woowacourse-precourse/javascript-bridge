/**
 * 지도의 출력 형식에 맞게 리스트 안의 요소들을 조합해서 반환한다.
 * @param {string[]} list 위쪽 혹은 아래쪽 지도에 포함된 다리 성공실패 목록들
 * @return {string} 지도 형식에 맞는 출력값
 */
const createMap = (list) => {
  return "[ " + list.join(" | ") + " ]";
};

module.exports = { createMap };
