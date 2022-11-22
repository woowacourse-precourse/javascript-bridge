class BridgeTest{
    constructor(bridge){
        this.validate(bridge);
    }
    validate(bridge){
        if(!bridge.every((value)=> value === "U" || value === "D"))
            throw new Error("[ERROR] 다리는 U와 D로만 이뤄진 상태여야 합니다.");
    }
}

module.exports = BridgeTest;