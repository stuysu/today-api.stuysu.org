import {gql} from "apollo-server-express";

export default gql`
	type Event {
		name: String!
		date: Date!
		id: Int!
	}
`;
