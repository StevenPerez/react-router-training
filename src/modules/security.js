function fakeRequest(authToken) {
	return new Promise((resolve, reject) => {

		setTimeout(() => {
			if(authToken === 'hackers') {
				resolve('Yes');
			} else {
				reject('No');
			}
		}, 200);
	});
}

export default function checkCredentials(nextState, replace, next) {
	const query = nextState.location.query;
	if (query.key) {
		fakeRequest(query.key)
			.then(
				() => next(),
				() => {
					replace('/error');
					next();
				}
			);
	} else {
		replace('/error');
		next();
	}
}
