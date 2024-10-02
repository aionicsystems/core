export function contractAddress(contract: string, chainName: number | undefined) {
    if (contract == "window") {
        switch (chainName) {
            case 31337:
                return "0x36c982c74176A667fA32c47Ce20004A7b830cDD4"
            case 1337:
                return "0x36c982c74176A667fA32c47Ce20004A7b830cDD4"
            case undefined:
                return "0x36c982c74176A667fA32c47Ce20004A7b830cDD4"
            default:
                return "0x36c982c74176A667fA32c47Ce20004A7b830cDD4"
        }
    }
    return "0x36c982c74176A667fA32c47Ce20004A7b830cDD4"
}