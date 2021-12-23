export default (_, __, { session }) => {
	session.destroy();
	return true
}
