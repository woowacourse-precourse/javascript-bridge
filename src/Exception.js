
class Exception{

    checkBridgeSize(size){
        if (size < 3 || size > 20) throw new Error("[ERROR] 다리 길이는 3이상 20이하여야합니다.");
    }
}

module.exports = Exception;