export default (
	_,
	__,
	{ models: {users}, session }
) => {
	if (session.userId === undefined) return null;
	const user = users.findOne({where: {id: session.userId}})
	return user
}
