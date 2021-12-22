import {gql} from "apollo-server-express";

export default gql`
	type Query {
		ping: String!

		today: Day
		currentAnnouncements: [Announcement]
		upcomingEvents: [Event]
		schedules: [Schedule]
		upcomingDays: [Day]
	}
`;
