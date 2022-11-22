const { Console } = require("@woowacourse/mission-utils");

class Validate  {
    static validateSize(size) {
        if(isNaN(size)) {
            Console.close();
            throw new Error('[ERROR] 다리 길이는 3부터 20사이의 숫자여야 합니다.');
        }
        if(size>20 || size<3) {
            throw new Error('[ERROR] 다리 길이는 3부터 20 사이의 숫자여야 합니다.')
        }
        return true
    }
    static validateMoveInput(moveinput) {
        if(moveinput == 'U' || moveinput == 'D') {
            return
        }
        throw '[ERROR] U나 D를 입력해주세요'
    }
}

module.exports = Validate;
