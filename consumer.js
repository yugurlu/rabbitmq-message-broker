const amqp = require('amqplib');
const rabbitmqConnection = require('./rabbitmqConnection');

async function onConsumeEmail() {
    const connection = await rabbitmqConnection();
    const channel = await connection.createChannel();
    await channel.assertQueue('emailQueue');
    
    channel.consume('emailQueue', (message) => {
        const email = JSON.parse(message.content.toString());
        setTimeout(() => {
            console.log(`Email sent to ${email}`);
            channel.ack(message);
        }, 5000);
    });
}

onConsumeEmail();