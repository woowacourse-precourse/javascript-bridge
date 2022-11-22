const maker = require("./BridgeMaker");
const generate = require("./BridgeRandomNumberGenerator");
const input = require("./View/InputView");
const output = require("./View/OutputView");

class Controller {
    #game;

    constructor() {
        this.#game = {};
    }

    init(){
        this.#game['bridge'] = maker.makeBridge(this.#initBridgeLength(),generate.generate);
    }

    /**
     * 다리 길이 입력 받는 함수
     * 실제로 library를 이용해서 입력받는 함수는 InputView에 따로 존재하나, try{}catch(e){} error 처리 후
     * @returns {number}
     */
    #initBridgeLength(){
        try{
            return input.readBridgeSize();
        }
        catch(e){
            output.printMessage(e);
            this.#initBridgeLength();
        }
    }

    bind(value){
        const keyValue = Object.entries(value);
        this.setGame(keyValue[0][0],keyValue[0][1]);
    }

    setGame(key, value){
        this.#game[key] = value;
    }

    getGame(key){
        return this.#game[key];
    }
}

module.exports = Controller;
