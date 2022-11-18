const PlayerMovement = {
  playerAxisCalculate(move, stage, retry) {
    // 상수처리 필요
    if ((move === 'U' && stage[0] === 1) || (move === 'D' && stage[1] === 1)) {
      return true;
    }
    if ((move === 'U' && stage[0] === 0) || (move === 'D' && stage[1] === 0)) {
      retry();
      return false;
    }
  },
};

module.exports = PlayerMovement;
