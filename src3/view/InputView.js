const MissionUtiles = require('@woowacourse/mission-utils');
const Utiles = require('../Utiles');

const InputView = {
  init(callback, callback2) {
    MissionUtiles.Console.readLine('과정, 레벨, 미션을 선택하세요', input => {
      const userChoices = Utiles.messageConverter(input);
      const [part, level, game] = userChoices;

      callback(level, game);
      callback2(part, level, game);
    });
  },
};

module.exports = InputView;
