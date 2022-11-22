const deepFreeze = (object) => {
  var propNames = Object.getOwnPropertyNames(object);
  for (let name of propNames) {
    let value = object[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  }
  return Object.freeze(object);
};

module.exports = {
  deepFreeze,
};

