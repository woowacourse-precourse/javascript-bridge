const RULE = require('../domain/constants');

const marking = (userSteps, bridgeDirections) => userSteps.map((step, index) => {
  if (step) {
    if (bridgeDirections[index]) return RULE.MARKER.SUCCESS;
    return RULE.MARKER.FAILURE;
  }
  return RULE.MARKER.NONE;
});

const getUpDownMap = (steps) => {
  const upSide = steps.map((step) => step === RULE.BEHAVIOR.UP);
  const downSide = upSide.map((step) => !step);
  return [upSide, downSide];
};

const mapMarker = (usersSteps, bridgeDirections) => {
  const [userUpside, userDownside] = getUpDownMap(usersSteps);
  const [bridgeUpside, bridgeDownside] = getUpDownMap(bridgeDirections);

  const mapUpside = marking(userUpside, bridgeUpside);
  const mapDownside = marking(userDownside, bridgeDownside);

  return [mapUpside, mapDownside];
};

module.exports = mapMarker;
