const { Console } = require("@woowacourse/mission-utils");


const Validate = {
    validateSize(size) {
        try {
            if (isNaN(size)) throw new Error("[ERROR] 숫자를 입력해 주세요");
            if (size<3 || size>20) throw new Error("[ERROR] 3부터 20사이의 숫자를 입력해 주세요");
          } catch(e) {
            Console.print(e);
            return true;
          }
    },
    validateMoveInput(moveinput) {
        try {
            if(!(moveinput == 'U' || moveinput == 'D')) throw new Error('[ERROR] U나 D를 입력해주세요')
        } catch(e) {
            Console.print(e)
            return true
        }   
    },
    validateRetryinput(retryInput){
        try {
            if(!(retryInput == 'R' || retryInput == 'Q')) throw new Error('[ERROR] R이나 Q를 입력해주세요.')
        } catch(e) {
            Console.print(e)
            return true
        }
    }
}

module.exports = Validate;
