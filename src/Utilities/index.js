const editBridge = (bridge) => `[${bridge.slice(0, bridge.length - 1)}]`;

const deepFreeze = (targetObj) => {
  Object.keys(targetObj).forEach((key) => {
    if (typeof key === 'object') {
      deepFreeze(targetObj[key]);
    }
  });
  return Object.freeze(targetObj);
};
module.exports = { editBridge, deepFreeze };
