///dev 
const env = process.env; 
const config = {
  db: { 
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_DATABASE,
    waitForConnections: true,
    port: env.DB_PORT,
    connectionLimit: 1000, 
    debug: env.DB_DEBUG || true
  },
};
module.exports = config;
