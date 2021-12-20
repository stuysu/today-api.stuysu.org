export default async (
	_,
	__,
	{ models: { day }}
) => {
	const date = new Date();
	return await day.findOne({
		where: {
			//date: `${date.getYear()}-${date.getMonth() + 1}-${date.getDate()}`
			date: new Date()
		}
	})
}
