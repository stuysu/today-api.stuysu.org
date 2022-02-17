export default async (
	_,
	__,
	{ models: { users }, permissionRequired }
) => {
	await permissionRequired("users")
	return users.findAll()
}
