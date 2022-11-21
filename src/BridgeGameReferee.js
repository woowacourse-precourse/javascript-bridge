const BridgeGameReferee = {
    isRetry(retryInput) {
        if (retryInput === "R") return true;
        if (retryInput === "Q") return false;
    },
}

module.exports = BridgeGameReferee;