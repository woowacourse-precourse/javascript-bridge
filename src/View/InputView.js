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


};

module.exports = InputView;
