const amqp = require("amqplib");
const rabbitmqConnection = require("../rabbitmqConnection");

module.exports = async (email) => {
  try {
    const connection = await rabbitmqConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue("emailQueue");
    channel.sendToQueue("emailQueue", Buffer.from(JSON.stringify(email)));
    console.log("Email sent to the queue");
  } catch (error) {
    console.log(error);
  }
};
