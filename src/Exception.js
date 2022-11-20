const Exception = {
  ERROR_PREFIX: '[ERROR]',
  throwError(message) {
    throw new Error(`${ERROR_PREFIX} ${message}`);
  },
};

module.exports = Exception;
