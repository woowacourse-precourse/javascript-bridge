const bridgeMaterialize = (bridge) => {
  const [topBridge, bottomBridge] = [[], []];
  bridge.forEach((v) => {
    if (v === 'U') topBridge.push('O') && bottomBridge.push(' ');
    else topBridge.push(' ') && bottomBridge.push('O');
  });
  return [topBridge, bottomBridge];
};

module.exports = bridgeMaterialize;
