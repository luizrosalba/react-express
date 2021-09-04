/// all configs - dev from config prod from system vars
const env = process.env; 

const config = {
  db: { 
    host: env.REACT_APP_host,
    user: env.REACT_APP_user,
    password: env.REACT_APP_password,
    database: env.REACT_APP_database,
    waitForConnections: env.REACT_APP_waitForConnections,
    port: env.REACT_APP_port,
    connectionLimit: env.REACT_APP_connectionLimit, 
    debug: env.REACT_APP_debug
  },
};
module.exports = config;
