export default async (_, { date, name }, { models: { event }, permissionRequired }) => {
	await permissionRequired("events")
	date = `${date.getUTCFullYear()}-${
		date.getUTCMonth() + 1
	}-${date.getUTCDate()}`;
	return await event.create({
		date,
		name
	});
};
