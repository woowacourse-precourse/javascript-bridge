const RULE = require('../domain/constants');

const marking = (userSteps, bridgeDirections) => userSteps.map((step, index) => {
  if (step) {
    if (bridgeDirections[index]) return RULE.MARKER.SUCCESS;
    return RULE.MARKER.FAILURE;
  }
  return RULE.MARKER.NONE;
});

const mapMarker = (usersSteps, bridgeDirections) => {
  const userUpside = usersSteps.map((step) => step === RULE.BEHAVIOR.UP);
  const userDownside = userUpside.map((step) => !step);
  const bridgeUpside = bridgeDirections.map((step) => step === RULE.BEHAVIOR.UP);
  const bridgeDownside = bridgeUpside.map((step) => !step);

  const mapUpside = marking(userUpside, bridgeUpside);
  const mapDownside = marking(userDownside, bridgeDownside);

  return [mapUpside, mapDownside];
};

module.exports = mapMarker;
