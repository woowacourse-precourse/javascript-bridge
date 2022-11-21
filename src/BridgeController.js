// 게임 로직 관리
class BridgeController {
    constructor(views) {
        this.inputView = views.inputView,
        this.outputView = views.outputView
    
        this.outputView.printStart();
    }
}

module.exports = BridgeController;
