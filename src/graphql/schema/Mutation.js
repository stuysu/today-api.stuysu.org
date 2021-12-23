import { gql } from 'apollo-server-express';

export default gql`
	type Mutation {
		echo(str: String!): String!

		editDay(
			date: Date
			scheduleId: Int
			testing: String
			block: String
		): Day!
		createEvent(date: Date!, name: String!): Event!
		alterEvent(id: Int!, date: Date, name: String): Event!
		removeEvent(id: Int!): Boolean!
		createAnnouncement(
			announcement: String!
			category: String!
		): Announcement!

		login(token: String!): User!
		logout: Boolean!
	}
`;
