export default async (_, __, { session }) => {
	await session.destroy();
	return true
}
