const BridgeBuild = {
    makeBridge(result, bridge_u, bridge_d){
        switch(result) {
            case 'U':
                bridge_u.push('O')
                bridge_d.push(' ')
                return
            case 'D':
                bridge_u.push(' ')
                bridge_d.push('O')
                return
        }
    },
    xBridge(result,userMove,bridge_u , bridge_d) {
        switch(userMove) {
            case 'U':
                bridge_u.push(result)
                bridge_d.push(' ')
                return
            case 'D':
                bridge_u.push(' ')
                bridge_d.push(result)
                return
        }
    }
}

module.exports = BridgeBuild;