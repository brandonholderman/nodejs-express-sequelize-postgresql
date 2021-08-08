module.exports = {
  HOST: "localhost",
  USER: "postgres",
  PASSWORD: "123",
  DB: "testdb",
  dialect: "postgres",
  pool: {
    max: 5, // max: maximum number of connection in pool
    min: 0, // min: minimum number of connection in pool
    acquire: 30000, // acquire: maximum time, in milliseconds, that pool will try to get connection before throwing error
    idle: 10000, // idle: maximum time, in milliseconds, that a connection can be idle before being released
  }
};