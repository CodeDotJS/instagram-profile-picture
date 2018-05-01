'use strict';

const got = require('got');
const user = require('./user.js');

const highDefinition = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	return user(username).then(userid => {
		const url = `https://i.instagram.com/api/v1/users/${userid}/info/`;

		return got(url, {json: true}).then(res => {
			return res.body.user.hd_profile_pic_url_info.url;
		});
	});
};

const instaProfileImage = module.exports = username => highDefinition(username);

instaProfileImage.regular = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	return user(username).then(userid => {
		const url = `https://i.instagram.com/api/v1/users/${userid}/info/`;

		return got(url, {json: true}).then(res => {
			return res.body.user.hd_profile_pic_versions[1].url;
		}).catch(err => {
			if (err) {
				return {
					error: 'The requested size is currently not available'
				};
			}
		});
	});
};

instaProfileImage.medium = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}`;

	return got(url).then(res => {
		return res.body.split(',"profile_pic_url_hd":"')[1].split('",')[0];
	});
};

instaProfileImage.small = username => {
	if (typeof username !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof username}`);
	}

	const url = `https://www.instagram.com/${username}`;

	return got(url).then(res => {
		return res.body.split('"profile_pic_url":"')[1].split('",')[0] || '';
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
