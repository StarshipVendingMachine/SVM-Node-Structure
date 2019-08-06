// const config = require('config');
const mysql = require('mysql2/promise');

if (!global.config) {
  global.config = require('config');
}

const options = {
  host: global.config.mysql.host_read,
  user: global.config.mysql.username,
  password: global.config.mysql.password,
  database: global.config.mysql.database,
  port: global.config.mysql.port,
  // multipleStatements: true,
  connectionLimit: 5,
};

let mysqlPool = null;

const execQuery = async (query, params) => {
  const result = {
    data: null,
    error: null,
  };

  try {
    const connection = await mysqlPool.getConnection(async conn => conn);

    try {
      const [rows, fields] = await connection.query({
        sql: query,
        timeout: 5000, // 5s
        values: params,
      });
      connection.release();
      result.data = rows;
    } catch (err) {
      connection.release();
      result.error = err;
    }
  } catch (err) {
    result.error = err;
  }

  return result;
};

const init = (callback) => {
  if (!mysqlPool) {
    mysqlPool = mysql.createPool(options);
    console.log('mysql pool success');
  }
};

exports.select1 = async () => {
  const result = await execQuery('select 1', []);
  return result;
};

exports.execQuery = execQuery;
exports.init = init;

init();
