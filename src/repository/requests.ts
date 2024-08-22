import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

export const APIURL =
  "http://34.30.203.81:8000/subgraphs/name/AionCoreSubgraph/";
export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});

export const assetEntities = gql(`
  query MyQuery($id: Bytes) {
    assetEntities(id: $id) {
      id
      name
      symbol
      rate
      liquidationRatio
      __typename
    }
  }
`);
