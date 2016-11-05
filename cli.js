#!/usr/bin/env node
'use strict';

const ipi = require('./index.js');

ipi('9gag').then(user => {
	console.log(user);
});

ipi.medium('9gag').then(user => {
	console.log(user);
});

ipi.small('9gag').then(user => {
	console.log(user);
});
