module.exports = {
  apps: [{
    name: 'PUFFAPI',
    script: 'app.js',
    exec_mode: 'cluster',
    instances: 'max',
    log_date_format: 'YYYY-MM-DD HH:mm:ss ',
    instance_var: 'INSTANCE_ID',
    env: {
      NODE_ENV: 'development',
      NODE_CONFIG_DIR: './config/',
    },
    env_staging: {
      NODE_ENV: 'staging',
      NODE_CONFIG_DIR: './config/',
    },
    env_production: {
      NODE_ENV: 'production',
      NODE_CONFIG_DIR: './config/',
    },
  }],
};
