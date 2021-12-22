export default (_, __, { models: { day, Sequelize } }) => {
	const date = new Date();
	return day.findAll({
		where: {
			date: {
				[Sequelize.Op.gte]: `${date.getUTCFullYear()}-${
					date.getUTCMonth() + 1
				}-${date.getUTCDate()}`
			}
		},
		order: [['date', 'ASC']]
	});
};
