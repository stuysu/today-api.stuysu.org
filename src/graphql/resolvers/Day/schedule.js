export default async ({ scheduleId }, _, { models: { schedule } }) =>
	schedule.findOne({ where: { id: scheduleId } });
