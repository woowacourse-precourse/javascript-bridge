const { Console } = require("@woowacourse/mission-utils");
class Exception{

    checkBridgeSize(size){
        try{
            if(this.isNotNumber(size)) throw new Error("[ERROR] 숫자를 입력해주세요");
            if(this.isNotInRange(size)) throw new Error("[ERROR] 다리 길이는 3이상 20이하여야 합니다.");
        }catch(error){
            Console.print(error.message);
            return true;
        }
    }

    isNotInRange(size){
        return size < 3 || size > 20;
    }

    isNotNumber(number){
        return (isNaN(number));
    }


    checkSpace(space){
        try{
            if (space !== "U" || space !== "D") throw new Error("[ERROR] U 또는 D를 입력해주세요.");
        }catch(error){
            Console.print(error.message);
            return true;
        }
        
    }

    checkRestart(restart){
        try{
            if (space !== "R" || space !== "Q") throw new Error("[ERROR] R 또는 Q를 입력해주세요.");
        }catch(error){
            Console.print(error.message);
            return true;
        }
    }
}

module.exports = Exception;