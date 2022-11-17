const PlayerMove = {
  movePossible(to, position, bridge) {
    if (to === bridge[position]) return true;
    return false;
  },
};

module.exports = PlayerMove;
