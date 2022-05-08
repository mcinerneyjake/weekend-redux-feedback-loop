/** ---------- POOL ---------- **/

// Node Module that will connect to postgesql
const pg = require('pg');

// Setup PG to connect to the database
const Pool = pg.Pool;

const pool = new Pool({
  database: 'prime_feedback', // database name (this will change)
  host: 'localhost', // where to find the database
  port: 5432, // port for finding the database
  max: 10, // max number of connections for the pool
  idleTimeoutMillis: 30000, // 30 seconds before timeout/cancel query
});

// Listener setup on the pool isn't required,
// but can be super handy for troubleshooting.
pool.on('connect', () => {
  console.log('Connected to the database');
});

pool.on('error', (error) => {
  console.log('Error with database pool', error);
});

module.exports = pool;

/**
 * You'll need to use environment variables in order to deploy your
 * pg-pool configuration to Heroku.
 * It will look something like this:
 **/

// const url = require('url');
// let config = {};

// if (process.env.DATABASE_URL) {
//   // Heroku gives a url, not a connection object
//   // https://github.com/brianc/node-pg-pool
//   let params = url.parse(process.env.DATABASE_URL);
//   let auth = params.auth.split(':');

//   config = {
//     user: auth[0],
//     password: auth[1],
//     host: params.hostname,
//     port: params.port,
//     database: params.pathname.split('/')[1],
//     ssl: { rejectUnauthorized: false },
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//   };
// } else {
//   // only change the things on the right side of the ||
//   config = {
//     user: process.env.PG_USER || null, //env var: PGUSER
//     password: process.env.DATABASE_SECRET || null, //env var: PGPASSWORD
//     host: process.env.DATABASE_SERVER || 'localhost', // Server hosting the postgres database
//     port: process.env.DATABASE_PORT || 5432, //env var: PGPORT
//     database: process.env.DATABASE_NAME || 'prime_feedback', //env var: PGDATABASE or the name of your database (e.g. database: process.env.DATABASE_NAME || 'koala_holla',)
//     max: 10, // max number of clients in the pool
//     idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
//   };
// }

// module.exports = new pg.Pool(config);
