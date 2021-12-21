import {gql} from "apollo-server-express";

export default gql`
	type Announcement {
		announcement: String!
		category: String!
		id: Int!
	}
`;
