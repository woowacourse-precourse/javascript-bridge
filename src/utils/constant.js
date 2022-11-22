const GAME_SIGNATURE = Object.freeze({
  up: 'U',
  down: 'D',
  pass: 'O',
  fail: 'X',
  gameOn: '진행중',
  gameSuccess: '성공',
  gameFail: '실패',
});

const MAP_SIGNATURE = Object.freeze({
  opening: '[ ',
  closed: ' ]',
  notSelected: ' ',
  partition: ' | ',
});

module.exports = { GAME_SIGNATURE, MAP_SIGNATURE };
