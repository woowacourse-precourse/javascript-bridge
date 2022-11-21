class BridgeGameToView {
  BridgeGameToOutputView(gameRec) {
    console.log(gameRec.bridgeOutput.firstBridge);
    console.log(gameRec.bridgeOutput.secondBridge);
    // OutputView.printMap(gameRec);
  }

  BridgeGameToInputView(gameRec) {
    InputView.readMoving(gameRec);
  }
}

module.exports = BridgeGameToView;
