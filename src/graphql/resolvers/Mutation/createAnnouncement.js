export default async (_, { announcement, category }, { models, permissionRequired }) => {
	await permissionRequired("announcements", category)
	return await models.announcement.create({
		announcement,
		category
	});
};
