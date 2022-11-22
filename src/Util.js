const insertResult = (str, insertStr) => {
  return str.slice(0, -1) + insertStr + str.slice(-1);
};

const removeResult = (str) => {
  if (str[str.length - 5] === "|") {
    return str.slice(0, -5) + str.slice(-1);
  }
  return str.slice(0, -3) + str.slice(-1);
};
module.exports = { insertResult, removeResult };
