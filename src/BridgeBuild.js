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
    xBridge(RESULT_USERMOVE,bridge_u,bridge_d) {
        switch(RESULT_USERMOVE[1]) {
            case 'U':
                bridge_u.push(RESULT_USERMOVE[0])
                bridge_d.push(' ')
                return
            case 'D':
                bridge_u.push(' ')
                bridge_d.push(RESULT_USERMOVE[0])
                return
        }
    }
}

module.exports = BridgeBuild;