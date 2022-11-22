const maker = require("./BridgeMaker");
const generate = require("./BridgeRandomNumberGenerator");
const input = require("./View/InputView");
const output = require("./View/OutputView");
const Const = require('../src/constant/constant');

class BridgeGameContoller {
    #game;
    #map;
    #totalTry;

    constructor() {
        this.#game = {
            current:0,
        };
        this.#totalTry = 1;
        this.#map = [];
    }

    init(){
        this.#game[Const.KEY.BRIDGE] = maker.makeBridge(this.#initBridgeLength(),generate.generate);
    }

    move(){
        let lastInput = null;
        try{
            lastInput = input.readMoving();
        }
        catch(e){
            this.move();
        }
        output.printMap(this.#game[Const.KEY.BRIDGE], this.#game[Const.KEY.CURRENT] + 1, lastInput);
        this.setGame(Const.KEY.CURRENT, this.#game[Const.KEY.CURRENT]++);
    }

    retry(){
        try{
            return input.readGameCommand();
        }
        catch(e){
            output.printMessage(e);
            this.retry();
        }
    }

    end(){
        // output.printResult(this.#game[Const.KEY.BRIDGE], this.#lastInput, this.#bridge[this.#bridge.length-1] === this.#lastInput, this.#totalTry);
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

module.exports = BridgeGameContoller;
