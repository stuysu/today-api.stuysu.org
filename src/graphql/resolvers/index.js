import { resolvers as graphqlScalarResolvers } from 'graphql-scalars';
import Query from './Query';
import Mutation from './Mutation';
import Day from './Day';

const resolvers = {
	...graphqlScalarResolvers,
	Query,
	Mutation,
	Day
};

export default resolvers;
