import {typeDefs as graphqlScalarDefs} from "graphql-scalars";
import Query from "./Query";
import Mutation from "./Mutation";
import Schedule from "./Schedule";
import Day from "./Day";
import Event from "./Event";
import Announcement from "./Announcement";

export default [
	...graphqlScalarDefs,
	Query,
	Mutation,
	Schedule,
	Day,
	Announcement,
	Event
];
