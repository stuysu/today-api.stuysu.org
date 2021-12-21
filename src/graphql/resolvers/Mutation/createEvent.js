export default async (
	_,
	{ date, name },
	{ models: { event }}
) => {
	return await event.create({
		date,
		name
	});
}
