'use strict';

const assert = require('assert');
const fn = require('../');
const fixtures = require('./fixtures.json');

Object.keys(fixtures).forEach(( fixture ) => {

	describe(fixture, function () {
		const t = fixtures[fixture].test;
		const e = fixtures[fixture].expect;
		t.forEach(( query, i ) => {

			it(query, function () {
				assert.equal(fn(query), e[i]);
			});

		});
	});

});
