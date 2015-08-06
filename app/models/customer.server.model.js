'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

/**
 * Customer Schema
 */
var CustomerSchema = new Schema({
	firstname: {
		type: String,
		default: '',
		trim: true
	},
	surname: {
		type: String,
		default: '',
		trim: true
	},
	suburb: {
		type: String,
		default: '',
		trim: true
	},
	industry: {
		type: String,
		default: '',
		trim: true
	},
	email: {
		type: String,
		default: '',
		trim: true
	},
	telephone: {
		type: String,
		default: '',
		trim: true
	},
	referred: {
		type: boolean
	},
	channel: {
		type: String,
		default: '',
		trim: true
	}

});

mongoose.model('Customer', CustomerSchema);