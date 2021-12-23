export default (
	_,
	__,
	{ models: {users}, session }
) => {
	if (!session.userId) return null;
	return users.findOne({where: {id: session.userId}})
}
