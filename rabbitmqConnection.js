const amqp = require('amqplib');

module.exports = async () => {
  const connection = await amqp.connect({username: 'user', password: 'password'});
  return connection;
}