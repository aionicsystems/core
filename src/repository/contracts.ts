export function contractAddress(contract: string, chainName: string | undefined) {
    if (contract == "window") {
        switch (chainName) {
            case "Ethereum":
                return "0xbC873913990da5673D739be7a2C15AEbA4e651b5"
            case "Arbitrum Sepolia Ether":
                return "0xbC873913990da5673D739be7a2C15AEbA4e651b5"
            case undefined:
                return "0xbC873913990da5673D739be7a2C15AEbA4e651b5"
            default:
                return "0xbC873913990da5673D739be7a2C15AEbA4e651b5"
        }
    }
    return "0xbC873913990da5673D739be7a2C15AEbA4e651b5"
}