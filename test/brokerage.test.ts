import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { AssetEvent } from "../generated/schema"
import { AssetEvent as AssetEventEvent } from "../generated/Brokerage/Brokerage"
import { handleAssetEvent } from "../src/brokerage"
import { createAssetEventEvent } from "./brokerage-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let token = Address.fromString("0x0000000000000000000000000000000000000001")
    let name = "Example string value"
    let symbol = "Example string value"
    let dataFeedAddress = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let newAssetEventEvent = createAssetEventEvent(
      token,
      name,
      symbol,
      dataFeedAddress
    )
    handleAssetEvent(newAssetEventEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("AssetEvent created and stored", () => {
    assert.entityCount("AssetEvent", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "AssetEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "token",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "AssetEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "name",
      "Example string value"
    )
    assert.fieldEquals(
      "AssetEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "symbol",
      "Example string value"
    )
    assert.fieldEquals(
      "AssetEvent",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "dataFeedAddress",
      "0x0000000000000000000000000000000000000001"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
