import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  AssetEvent,
  LoanEvent,
  OwnershipTransferred
} from "../generated/Window/Window"

export function createAssetEventEvent(
  token: Address,
  name: string,
  symbol: string,
  dataFeedAddress: Address
): AssetEvent {
  let assetEventEvent = changetype<AssetEvent>(newMockEvent())

  assetEventEvent.parameters = new Array()

  assetEventEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  assetEventEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  assetEventEvent.parameters.push(
    new ethereum.EventParam("symbol", ethereum.Value.fromString(symbol))
  )
  assetEventEvent.parameters.push(
    new ethereum.EventParam(
      "dataFeedAddress",
      ethereum.Value.fromAddress(dataFeedAddress)
    )
  )

  return assetEventEvent
}

export function createLoanEventEvent(
  id: BigInt,
  owner: Address,
  collateral: BigInt,
  asset: Address,
  liability: BigInt,
  dataFeed: Address,
  rate: BigInt,
  time: BigInt
): LoanEvent {
  let loanEventEvent = changetype<LoanEvent>(newMockEvent())

  loanEventEvent.parameters = new Array()

  loanEventEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam(
      "collateral",
      ethereum.Value.fromUnsignedBigInt(collateral)
    )
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam(
      "liability",
      ethereum.Value.fromUnsignedBigInt(liability)
    )
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam("dataFeed", ethereum.Value.fromAddress(dataFeed))
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )
  loanEventEvent.parameters.push(
    new ethereum.EventParam("time", ethereum.Value.fromUnsignedBigInt(time))
  )

  return loanEventEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}
