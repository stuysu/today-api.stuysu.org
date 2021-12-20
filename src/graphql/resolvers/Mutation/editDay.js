export default async (
	_,
	{ date, scheduleId, testing, block },
	{ models: { day, schedule }}
) => {
	// date is a date object

	// TODO validation

	// JS date uses local time so if you don't do this you end up one day behind sometimes
	// assuming the input is something like "2021-12-20" (when this comment was written :) hi future people)
	date = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`

	const editingDay = await day.findOne({
		where: {
			date
		}
	});

	if (!editingDay) {
		return await day.create({
			date, scheduleId, testing, block
		});
	}

	if (date) editingDay.date = date;
	if (scheduleId) editingDay.scheduleId = scheduleId;
	if (testing) editingDay.testing = testing;
	if (block) editingDay.block = block;
	await editingDay.save();
	return editingDay;
}
