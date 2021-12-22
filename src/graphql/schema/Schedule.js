import { gql } from "apollo-server-express";

export default gql`
  type Schedule {
    schedule: String!
    name: String!
    id: Int!
  }
`;
