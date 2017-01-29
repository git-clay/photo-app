var config = {};
console.log(process.env)
config.mashapeKey = process.env.mashapeKey
config.redis.host = 'hostname';
config.web.port = process.env.WEB_PORT ||5000;

module.exports = config;