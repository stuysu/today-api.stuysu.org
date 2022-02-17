import { ApolloError } from "apollo-server-express"

export default async (_, { id }, { models: { users }, permissionRequired }) => {
	await permissionRequired("users")
	const user = await users.findOne({where: {id}})
	if (!user) {
		throw new ApolloError("There's no user with that ID", 'ID_NOT_FOUND')
	}
	await user.destroy()
	return true
}
