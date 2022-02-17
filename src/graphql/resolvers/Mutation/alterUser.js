import { ForbiddenError } from "apollo-server-express"

export default async (_, { id, email, permissions}, {models: {users}, permissionRequired}) => {
	await permissionRequired("users")
	const user = await users.findOne({where: {id}})
	if (!user) {
		throw new ApolloError("There's no user with that ID", "ID_NOT_FOUND")
	}

	if (email) user.email = email;
	if (permissions) {
		try {
			JSON.parse(permissions)
		} catch (e) {
			throw new ApolloError("Permissions is not valid JSON!", 'INVALID_JSON')
		}
		user.permissions = permissions
	}
	return await user.save();
}
