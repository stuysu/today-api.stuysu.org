import {ForbiddenError, ApolloError} from "apollo-server-express"

import { OAuth2Client } from "google-auth-library"
import { GOOGLE_AUTH_CLIENT_ID } from "../../../constants"

const client = new OAuth2Client(GOOGLE_AUTH_CLIENT_ID)

export default async (
	_,
	{ token },
	{ models: { users }, session }
) => {
	if (session.permissions || session.userId) throw new ForbiddenError("You are already signed in")
	const ticket = await client.verifyIdToken({
		idToken: token,
		audience: GOOGLE_AUTH_CLIENT_ID
	})
	const {email, given_name: firstName, family_name: lastName, sub: oAuthId} = ticket.getPayload();

	const user = await users.findOne({
		where: {email}
	})
	if (!user) {
		throw new ForbiddenError("User with that email was not found. Please contact it@stuysu.org or your SU director if you believe this was a mistake.")
	}

	if (!user.oAuthId) {
		user.firstName = firstName
		user.lastName = lastName
		user.oAuthId = oAuthId;
		await user.save()
	}

	if (user.oAuthId !== oAuthId) {
		throw new ForbiddenError("OAuth ID in the database does not match user OAuth ID.")
	}

	session.userId = user.id;
	session.permissions = user.permissions;
	await session.save();
	console.log(session)

	return user;
}
