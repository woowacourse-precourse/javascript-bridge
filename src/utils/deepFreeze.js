/**
 * 객체를 재귀 호출을 사용하여 중첩된 모든 객체를 freeze합니다.
 *
 * @template T
 * @param {T} object
 * @returns {T}
 */
function deepFreeze(object) {
  Object.keys(object).forEach((prop) => {
    if (typeof object[prop] === 'object' && !Object.isFrozen(object[prop])) {
      deepFreeze(object[prop]);
    }
  });
  return Object.freeze(object);
}

module.exports = deepFreeze;
