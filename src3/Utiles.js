const GameList = require('./GameList');

const Utiles = {
  messageConverter(userInput) {
    const convertedMessage = userInput.replace(/ /g, '').split(',');
    //now convertedMessage have an array that conatins [백/프론트엔드 , 레벨, 게임이름]
    return convertedMessage;
  },

  hasGame(level, game) {
    if (!GameList[level].includes(game))
      throw new Error('게임이 올바르지 않습니다.');
  },
};

module.exports = Utiles;
