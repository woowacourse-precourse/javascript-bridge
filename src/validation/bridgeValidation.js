function bridgeValidation(bridgeInput) {
  const bridgeNumber = Number(bridgeInput);
  if (bridgeNumber < 3 || bridgeNumber > 20 || Number.isNaN(bridgeNumber)) {
    return false;
  }

  return true;
}

module.exports = bridgeValidation;
