class CalcForDrawingBridgeStatus{

    constructor(input,generatedBridge,gameStatus) {
        this.input=input,
        this.generatedBridge=generatedBridge
        this.gameStatus=gameStatus 
    }

    
    calc(){
        let answerOfCurrentlocation=this.generatedBridge[this.gameStatus.playerLocation];   
        this.ifCorrect(answerOfCurrentlocation);
        this.ifWrong(answerOfCurrentlocation);
        this.gameStatus.playerLocation+=1;
    }

    ifCorrect(answerOfCurrentlocation){
        if(this.input==='U' && answerOfCurrentlocation==='U'){
           this.gameStatus.bridgeStatus.up.push('O');
           this.gameStatus.bridgeStatus.down.push(' ');
        }
        if(this.input==='D' && answerOfCurrentlocation==='D'){
            this.gameStatus.bridgeStatus.up.push(' ');
            this.gameStatus.bridgeStatus.down.push('O');
        }
    }
    
    ifWrong(answerOfCurrentlocation){
        if(this.input==='U' && answerOfCurrentlocation==='D'){
           this.gameStatus.bridgeStatus.up.push('X');
           this.gameStatus.bridgeStatus.down.push(' ');
           this.gameStatus.wrongFlag=true;
        }
        if(this.input==='D' && answerOfCurrentlocation==='U'){
            this.gameStatus.bridgeStatus.up.push(' ');
            this.gameStatus.bridgeStatus.down.push('X');
            this.gameStatus.wrongFlag=true;
        }
    }

}

module.exports=CalcForDrawingBridgeStatus;