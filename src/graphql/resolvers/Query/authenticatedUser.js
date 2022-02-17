export default (
	_,
	__,
	{ models: {users}, session }
) => {
	console.log(session.userId)
	if (session.userId === undefined) return null;
	const user = users.findOne({where: {id: session.userId}})
	console.log("\n\n\nUSER\n\n\n", user)
	return user
}
