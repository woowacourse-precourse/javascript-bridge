const Io = require('../Io');
const OutputView = require('../View/OutputView');

const InputView = {
  question(str, callback, correctFunction) {
    Io.input(str, input => {
      try{
        correctFunction(input);
        callback(input);
      } catch (error) {
        OutputView.error(error);
        InputView.question(str, callback, correctFunction);
      }
    });
  },

  readBridgeSize(callback) {
      InputView.question('다리의 길이를 입력해주세요.\n',callback, InputView.correctSize);
  },
  

};

module.exports = InputView;
