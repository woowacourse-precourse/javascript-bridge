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
  
  correctSize(input) {
    if (!parseInt(input)) {
      Io.close();
      throw new Error('[ERROR] 숫자가 아닙니다.');
    }
    
    if (parseInt(input) < 3 || parseInt(input) > 20) {
      Io.close();
      throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.');
    }
  },
  
  readMoving(callback) {
    InputView.question('이동할 칸을 선택해주세요. (위: U, 아래: D)\n', callback, InputView.correctMove);
  },

  correctMove(input) {
    if (input === 'U' || input === 'D') {
      return true;
    } 

    Io.close();
    throw new Error(`[ERROR] 유효하지 않은 움직임입니다.`);
  },

  correctCommand(input) {
    if (input === 'Q' || input === 'R') {
      return true;
    }
    
    Io.close();
    throw new Error(`[ERROR] 유효하지 않은 입력입니다.`);
  },


};

module.exports = InputView;
