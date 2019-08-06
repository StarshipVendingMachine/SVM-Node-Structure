const MYSQL = require('../modules/MYSQL');

exports.getOne = async (params) => {
  const query = 'select 1';

  const result = await MYSQL.execQuery(query);
  console.log(result.data[0]['1']);

  return result;
};
