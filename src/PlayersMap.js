const { PLAYERS_MAP, START } = require('./constants/Settings')

class PlayersMap {
    #upSpace;

    #downSpace;

    show(playersBridge, winBridge) {
        this.#upSpace = [];
        this.#downSpace = [];
        for (let i = START; i < playersBridge.length; i += PLAYERS_MAP.one_value) {
            this.make(playersBridge[i], winBridge[i]);
        }
        this.#upSpace = PlayersMap.cover(PlayersMap.divideLine(this.#upSpace));
        this.#downSpace = PlayersMap.cover(PlayersMap.divideLine(this.#downSpace));

        return `${this.#upSpace}\n${this.#downSpace}`;
    }

    make(playersBridge, winBridge) {
        this.isU(playersBridge, winBridge);
        this.isD(playersBridge, winBridge);
    }

    isU(playersBridge, winBridge) {
        if (playersBridge === PLAYERS_MAP.up) {
            this.#upSpace.push(playersBridge === winBridge ? PLAYERS_MAP.win : PLAYERS_MAP.fail);
            this.#downSpace.push(PLAYERS_MAP.empty);
        }
    }

    isD(playersBridge, winBridge) {
        if (playersBridge === PLAYERS_MAP.down) {
            this.#upSpace.push(PLAYERS_MAP.empty);
            this.#downSpace.push(playersBridge === winBridge ? PLAYERS_MAP.win : PLAYERS_MAP.fail);
        }
    }

    static divideLine(value) {
        return value.join(' | ');
    }

    static cover(space) {
        return `${PLAYERS_MAP.left_block}${PLAYERS_MAP.empty}${space}${PLAYERS_MAP.empty}${PLAYERS_MAP.right_block}`;
    }
}

module.exports = PlayersMap;
