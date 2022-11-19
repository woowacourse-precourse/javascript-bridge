const { print } = require('./MissionUtils');

function catchError(error) {
  try {
    throw new Error(error);
  } catch (error) {
    print(error);
  }
}

module.exports = catchError;
