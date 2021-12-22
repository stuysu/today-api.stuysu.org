export default async (_, __, { models: { event, Sequelize } }) => {
  const date = new Date();
  return event.findAll({
    where: {
      date: {
        [Sequelize.Op.gte]: `${date.getUTCFullYear()}-${
          date.getUTCMonth() + 1
        }-${date.getUTCDate()}`,
      },
    },
    order: [["date", "ASC"]],
  });
};
