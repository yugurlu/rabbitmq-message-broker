const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const emailPublisher = require('./services/rabbitmq/publisher/publisher')
require('./services/rabbitmq/consumer/consumer')

app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.send('Response from the server')
})

app.post('/send-email', async (req, res) => {
    const { email } = req.body;
    
    await emailPublisher(email);
    res.status(200).send('Email sent to the queue');
})

app.listen(3000, () => {
  console.log('Listening on port 3000')
})

module.exports = app;