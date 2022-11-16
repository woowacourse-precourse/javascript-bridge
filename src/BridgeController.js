const { print } = require('./utils/MissionUtils');

class BridgeController {}

function catchError(error) {
  try {
    throw error;
  } catch (error) {
    print(error);
  }
}

module.exports = BridgeController;
