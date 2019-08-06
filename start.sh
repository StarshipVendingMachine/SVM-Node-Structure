echo $1

git pull
npm install
pm2 startOrReload ecosystem.config.js --env=$1

echo 'Done'