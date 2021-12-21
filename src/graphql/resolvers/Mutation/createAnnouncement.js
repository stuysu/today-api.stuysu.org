export default async (
	_,
	{ announcement, category },
	{ models }
) => {
	return await models.announcement.create({
		announcement,
		category
	})
}
