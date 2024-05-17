const amqp = require('amqplib');

module.exports = async () => {
  try {
    const connection = await amqp.connect('amqp://rabbitmq:5672');
    return connection;
  } catch (error) {
    console.log(error);
  }
}