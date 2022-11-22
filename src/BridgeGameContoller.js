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
        try{
            this.setGame(Const.KEY.LAST, input.readMoving());
        }
        catch(e){
            this.move();
        }
        this.setMap();
        this.setGame(Const.KEY.CURRENT, this.#game[Const.KEY.CURRENT]+1);
        output.printMap(this.#map);
    }

    parseMap(bridge, last, flag){
        const result = [];
        for(let i = 0 ; i < bridge.length -1 ; i++){
            if(bridge[i] === flag) result.push(' O ');
            else result.push('   ');
        }
        if(bridge[bridge.length-1] === last && last === flag) result.push(' O ');
        else if(bridge[bridge.length-1] === last && last !== flag) result.push('   ');
        else result.push(' X ');
        return result;
    }

    setMap(){
        this.#map[0] = this.parseMap(this.#game[Const.KEY.BRIDGE].slice(0,this.#game[Const.KEY.CURRENT]+1), this.getGame(Const.KEY.LAST), 'U');
        this.#map[1] = this.parseMap(this.#game[Const.KEY.BRIDGE].slice(0,this.#game[Const.KEY.CURRENT]+1), this.getGame(Const.KEY.LAST), 'D');
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
        output.printResult(this.getMap(), this.getSuccess(), this.#totalTry);
    }

    /**
     * 다리 길이 입력 받는 함수
     * 실제로 library를 이용해서 입력받는 함수는 InputView에 따로 존재하나, try{}catch(e){} error 처리 후
     * @returns {number}
     */
    #initBridgeLength(){
        try{
            const len = input.readBridgeSize();
            return len !== undefined ? len : null;
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

    resetGame(){
        this.#game = {
            current:0,
        };
        this.#map = [];
        this.#totalTry += 1;
    }

    getSuccess(){
        if(this.getGame(Const.KEY.BRIDGE)[this.getGame(Const.KEY.BRIDGE).length-1] === this.getGame(Const.KEY.LAST)) {
            return true;
        }
        return false;
    }

    getMap(){
        return this.#map;
    }

    setGame(key, value){
        this.#game[key] = value;
    }

    getGame(key){
        return this.#game[key];
    }

    getTry(){
        return this.#totalTry;
    }
}

module.exports = BridgeGameContoller;
