const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

//respond to GET requests
app.get('/', (req, res) => {
  res.send('send a post request to test)');
});

//handle post request
app.post('/', (req, res) => {
  const message = req.body.message;
  console.log(message);

  //check for string inputs
  if (message && message.text) {
    //command check
    if (message.text.toLowerCase().includes('smile')) {
      //if message has smile, send smile back
      res.status(200).send(createTextMessage('😊'));
    } else {
      //if message has no smile, send thinking emoji
      res.status(200).send(createTextMessage('🤔'));
    }
  } else {
    //if weird message (null, not text, etc.)
    res.status(200).send(createTextMessage('I did not understand that. 😕'));
  }
});

function createTextMessage(text) {
  return { text };
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SmileBot is now running on port ${PORT} !!!!!!!`);
});
