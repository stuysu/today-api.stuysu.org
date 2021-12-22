import { ApolloError } from 'apollo-server-express';

export default async (_, { id }, { models: { event } }) => {
	const removingEvent = await event.findOne({ where: { id } });
	if (!removingEvent) {
		throw new ApolloError("There's no event with that ID", 'ID_NOT_FOUND');
	}
	removingEvent.destroy();
	return true;
};
