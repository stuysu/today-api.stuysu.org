import {gql} from "apollo-server-express"

export default gql`
	type Mutation {
		echo(str: String!): String!

		editDay(date: Date, scheduleId: Int, testing: String, block: String): Day!
	}
`;
