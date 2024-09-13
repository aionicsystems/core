import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const APIURL =
  "http://34.30.203.81:8000/subgraphs/name/AionCoreSubgraph/";
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
      name
      symbol
      rate
      liquidationRatio
      __typename
    }
  }
`);

export const loanEntities = gql(`
    query LoanEntitiesQuery($sort_by: String, $sort_order: String,) {
    loanEntities(orderBy: $sort_by, orderDirection: $sort_order) {
      id
    collateralAmount
    liabilityAmount
    liquidationRatio
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
