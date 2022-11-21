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
};

module.exports = BridgeCompare;
