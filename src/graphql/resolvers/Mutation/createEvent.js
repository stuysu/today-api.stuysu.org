export default async (
	_,
	{ date, name },
	{ models: { event }}
) => {
	date = `${date.getUTCFullYear()}-${date.getUTCMonth() + 1}-${date.getUTCDate()}`
	return await event.create({
		date,
		name
	});
}
