const InputView = require('./InputView');

const BridgeCompare = {
    moveBridge(userChoice, bridgeValue){
        return BridgeCompare.IsCompareBridge(userChoice, bridgeValue);
    },
    IsCompareBridge(userChoice, BridgeValue) {
        console.log(userChoice, )
        if(userChoice === BridgeValue) { return true; }
        return false;
    },
    makeBridgeResultArray(userChoice, result, resultArray) {
        if(userChoice === 'U') {
            if(result){
                resultArray[0].push('O');
            }
            else {
                resultArray[0].push('X');
            }
        }
        else {
            if(result){
                resultArray[1].push('O');
            }
            else {
                resultArray[1].push('X');
            }
        }
    return resultArray;
    },
};

module.exports = BridgeCompare;
