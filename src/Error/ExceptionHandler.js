const exceptionHandler = (message) => {
  try {
    throw new Error(message);
  } catch (e) {
    return e.message;
  }
};

module.exports = exceptionHandler;
