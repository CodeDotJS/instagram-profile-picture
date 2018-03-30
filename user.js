'use strict';

const got = require('got');

module.exports = username => {
	return got(`https://instagram.com/${username}/?__a=1`, {json: true}).then(res => {
		return res.body.graphql.user.id;
	});
};
