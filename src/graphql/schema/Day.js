import {gql} from "apollo-server-express";

export default gql`
	type Day {
		date: Date!
		schedule: Schedule!
		testing: String!
		block: String!
	}
`;
