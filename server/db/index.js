import PG from 'pg';

const pool = PG.Pool;

// const pool = new Pool({
//   user: '****',
//   database: '****',
//   password: '****',
//   port: 5432,
//   host: '****',
//   max: 5,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 5000,
// });
const client = new pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
});

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + '?sslmode=require',
// });

// module.exports = pool;
// import Pool from 'pg';

// const pool = new Pool({
//   user: process.env.PG_USER,
//   host: process.env.PG_HOST,
//   database: process.env.PG_DATABASE,
//   password: process.env.PG_PASSWORD,
//   port: process.env.PG_PORT,
// });

// const pool = new Pool({
//   connectionString: process.env.POSTGRES_URL + '?sslmode=require',
// });

export default client;
