import {ForbiddenError, ApolloError} from "apollo-server-express"

export default async (_, { email, permissions }, { models: { users }, permissionRequired }) => {
	await permissionRequired("users")
	const user = await users.findOne({where: {email}})
	if (user) throw new ForbiddenError("User with that email already exists in the database!")
	try {
		JSON.parse(permissions)
	} catch (e) {
		throw new ForbiddenError("Permissions is not valid JSON!")
	}
	return users.create({
		email,
		permissions
	})
}
