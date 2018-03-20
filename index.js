'use strict';

const got = require('got');

const cdn = 'https://scontent-lga3-1.cdninstagram.com/';

const replaceCDN = link => {
	return `${cdn}${link.split('/vp/')[1].replace('/s320x320/', '/s1080x1080/')}`;
};

const highDefinition = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return replaceCDN(res.body.graphql.user.profile_pic_url_hd) || '';
	});
};

const instaProfileImage = module.exports = username => highDefinition(username);

instaProfileImage.medium = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return res.body.graphql.user.profile_pic_url_hd || '';
	});
};

instaProfileImage.small = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}/?__a=1`;

	return got(`${url}`, {json: true}).then(res => {
		return res.body.graphql.user.profile_pic_url || '';
	});
};

instaProfileImage.image = source => {
	if (typeof source !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof source}`);
	}

	const url = source.split('?')[0];

	return got(`${url}?__a=1`, {json: true}).then(res => {
		return res.body.graphql.shortcode_media.display_url || '';
	});
};

instaProfileImage.video = source => {
	if (typeof source !== 'string') {
		throw new TypeError(`Epxected a string, got ${typeof source}`);
	}

	const url = source.split('?')[0];

	return got(`${url}?__a=1`, {json: true}).then(res => {
		return res.body.graphql.shortcode_media.video_url || '';
	});
};
