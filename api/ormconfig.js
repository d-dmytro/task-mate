module.exports = {
  type: 'sqlite',
  database: './db/mydb.sql',
  entities:
    process.env.NODE_ENV === 'test'
      ? ['src/entities/*.ts'] // jest runs files using ts-jest, which parses .ts files
      : ['dist/entities/*.js'], // in production and development, we run compiled .js files
  synchronize: true
};
