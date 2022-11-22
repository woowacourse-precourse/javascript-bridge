/**
 * 기존의 지도에 새로운 이동 추가하기
 * @param {string} map 기존의 지도
 * @param {string} map 새로 추가할 이동 경로
 */
const insertResult = (map, newMove) => {
  return map.slice(0, -1) + newMove + map.slice(-1);
};

/**
 * 기존의 지도에서 마지막 이동 삭제하기
 * @param {string} map 기존의 지도
 */
const removeResult = (map) => {
  if (map[map.length - 5] === "|") {
    return map.slice(0, -5) + map.slice(-1);
  }
  return map.slice(0, -3) + map.slice(-1);
};
module.exports = { insertResult, removeResult };
