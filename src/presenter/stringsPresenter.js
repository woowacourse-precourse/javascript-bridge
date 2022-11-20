const PLAYER_STATE = {
  NEXT: "NEXT",
  FINISH: "FINISH",
  RETRY: "RETRY",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL",
};

const INPUT_TRY_FN = {
  size(bridgeGamePresenter, size) {
    bridgeGamePresenter.createBridgeModel(size);
  },
  moving(bridgeGamePresenter, selectedMove) {
    bridgeGamePresenter.move(selectedMove);
  },
  gameCommand(bridgeGamePresenter, retry) {
    bridgeGamePresenter.checkRetryInput(retry);
  },
};

const INPUT_CATCH_FN = {
  size(bridgeGamePresenter) {
    bridgeGamePresenter.getBridgeSize();
  },
  moving(bridgeGamePresenter) {
    bridgeGamePresenter.getPlayerMove();
  },
  gameCommand(bridgeGamePresenter) {
    bridgeGamePresenter.getGameCommand();
  },
};

module.exports = { PLAYER_STATE, INPUT_CATCH_FN, INPUT_TRY_FN };
