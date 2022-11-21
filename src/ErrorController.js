const errorController = (callbalck, errorCallback) => {
  try {
    callbalck();
  } catch (error) {
    console.log(error.message);
    errorCallback();
  }
};

module.exports = errorController;
