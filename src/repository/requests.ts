import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const APIURL =
  "http://34.72.19.102:8000/subgraphs/name/AionCoreSubgraph/";
export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export const assetEntities = gql(`
  query AssetEntitiesQuery {
    assetEntities {
      id
      name
      symbol
      rate
      liquidationRatio
      __typename
    }
  }
`);

export const assetSingleEntity = gql(`
  query AssetEntitiesQuery($id: Bytes) {
    assetEntity(id: $id) {
      id
      latestPrice
      name
      symbol
      rate
      liquidationRatio
      aggregator {
        decimals
      }
      __typename
    }
  }
`);

export const loanEntities = gql(`
  query LoanEntitiesQuery($sort_by: String, $sort_order: String) {
  assetEntity (id: "0x0000000000000000000000000000000000000000") {
  id
  symbol
  latestPrice
  aggregator {
    decimals
  }
}
  loanEntities(orderBy: $sort_by, orderDirection: $sort_order) {
  id
  collateralAmount
  liabilityAmount
  liquidationRatio
  borrowingRatio
  asset {
    id
    latestPrice
    rate
    liquidationRatio
    dataFeedAddress
    symbol
    name
    aggregator {
      decimals
    }
  }
  __typename
  }
}
`);

export const loanEntitiesByOwner = gql(`
    query LoanEntitiesQuery($sort_by: String, $sort_order: String, $owner: Bytes) {
    assetEntity (id: "0x0000000000000000000000000000000000000000") {
    id
    symbol
    latestPrice
    aggregator {
      decimals
    }
  }
    loanEntities(orderBy: $sort_by, orderDirection: $sort_order, where: {owner: $owner}) {
    id
    collateralAmount
    liabilityAmount
    liquidationRatio
    borrowingRatio
    asset {
      id
      latestPrice
      rate
      liquidationRatio
      dataFeedAddress
      symbol
      name
      aggregator {
        decimals
      }
    }
    __typename
    }
  }
`);

export const loanSingleEntity = gql(
  `query LoanSingleEntity ($id: Bytes) {
  loanEntity(id: $id) {
    id
    collateralAmount
    liabilityAmount
    liquidationRatio
    borrowingRatio
    asset {
      id
      latestPrice
      rate
      liquidationRatio
      dataFeedAddress
      symbol
      name
      aggregator {
        decimals
      }
    }
  }
}`,
);

export const windowEntities = gql(`
  query WindowEntitiesQuery {
    assetEntity (id: "0x0000000000000000000000000000000000000000") {
      id
      symbol
      latestPrice
      aggregator {
        decimals
      }
    }
    windowEntities {
      id
      owner
      borrowingRatio
      collectorFee
      daoFee
      etherDataFeedAddress
      liquidatorFee
      precision
    }
  }
`);
