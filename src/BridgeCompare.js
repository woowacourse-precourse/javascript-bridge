const InputView = require('./InputView');

const UserChoiceIndex = {
    U : 0,
    D : 1,
}

const BridgeCompare = {
    isCompleteBridge(SIZE, bridgeSize){
        return SIZE == bridgeSize;
    },
    isSameBridge(userChoice, NowBridgeValue) {
        if(userChoice === NowBridgeValue) { return true; }
        return false;
    },
    makeBridgeResultArray(userChoice, CompareResult, BridgeResultArray) {
        const Index = UserChoiceIndex[userChoice];
        if(CompareResult) {
            BridgeResultArray[Index].push(' O ');
        }
        else{
            BridgeResultArray[Index].push(' X ');
        }
        BridgeResultArray[Math.abs(Index - 1)].push('   ');
        return BridgeResultArray;
    },
};

module.exports = BridgeCompare;
