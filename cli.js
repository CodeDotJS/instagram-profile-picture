#!/usr/bin/env node
'use strict';

const ipp = require('./index.js');

ipp('9gag').then(user => {
	console.log(user);
});

ipp.medium('9gag').then(user => {
	console.log(user);
});

ipp.small('9gag').then(user => {
	console.log(user);
});
