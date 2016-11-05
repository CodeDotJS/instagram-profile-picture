'use strict';

const got = require('got');

const replace = arg => {
	return arg.replace('/s320x320', '');
};

const highDefinition = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return replace(res.body.user.profile_pic_url_hd) || '';
	});
};

const instaProfileImage = module.exports = username => highDefinition(username);

instaProfileImage.medium = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return res.body.user.profile_pic_url_hd || '';
	});
};

instaProfileImage.small = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return res.body.user.profile_pic_url || '';
	});
};
