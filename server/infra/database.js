const promise = require('pg-promise')();
const db = promise({
		user: 'postgres', 
		password: '12345',
		host: 'localhost',
		port: 5432,
		database:'unichristus'
});


module.exports = db;