const ResultMessageCreator = {
  generate(array) {
    return `[ ${array.join(" | ")} ]`;
  },
};

module.exports = ResultMessageCreator;
