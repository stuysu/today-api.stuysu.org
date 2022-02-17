import { ApolloError } from 'apollo-server-express';

export default async (_, { id }, { models: { event }, permissionRequired }) => {
	await permissionRequired("events")
	const removingEvent = await event.findOne({ where: { id } });
	if (!removingEvent) {
		throw new ApolloError("There's no event with that ID", 'ID_NOT_FOUND');
	}
	await removingEvent.destroy();
	return true;
};
