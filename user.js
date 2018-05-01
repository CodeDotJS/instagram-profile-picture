'use strict';

const got = require('got');

module.exports = username => {
	return got(`https://instagram.com/${username}`).then(res => {
		const data = res.body.split('"id":"')[1].split('",')[0];
		return data;
	}).catch(err => {
		if (err) {
			return err.message;
		}
	});
};
