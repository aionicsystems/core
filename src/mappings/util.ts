import { BigInt, BigDecimal } from '@graphprotocol/graph-ts'

export function convertPriceToDecimal(price: BigInt, decimals: number): BigDecimal {
    return price.toBigDecimal().div(powBigInt(decimals).toBigDecimal());
}

export function powBigInt(decimals: number): BigInt {
    let power = BigInt.fromI32(10);
    for (let i = 1; i < decimals; i++) {
        power = power.times(BigInt.fromI32(10));
    }
    return power;
}