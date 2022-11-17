const PlayerMove = {
  movePossible(move, position, bridge) {
    if (move === bridge[position]) return true;
    return false;
  },
};

module.exports = PlayerMove;
