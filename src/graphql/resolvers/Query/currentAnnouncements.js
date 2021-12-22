export default async (_, __, { models: { announcement } }) => {
	const categories = [];
	return (
		await announcement.findAll({
			order: [['createdAt', 'DESC']]
		})
	).filter(result => {
		if (categories.includes(result.category)) return false;
		categories.push(result.category);
		return true;
	});
};
