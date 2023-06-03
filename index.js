const express = require('express');

const app = express();

const outputs = [false, false, false, false, false, false, false, false, false, false, false, false];

// Endpoint to get the status of an output
app.get('/status', (req, res) => {
  const { id, output } = req.query;
  const outputIndex = parseInt(output) - 1;

  if (id === 'board1' && outputIndex >= 0 && outputIndex < outputs.length) {
    const status = outputs[outputIndex] ? 'ON' : 'OFF';
    res.send(status);
  } else {
    res.status(404).send('Output not found');
  }
});

// Endpoint to turn on an output
app.get('/on', (req, res) => {
  const { id, output } = req.query;
  const outputIndex = parseInt(output) - 1;

  if (id === 'board1' && outputIndex >= 0 && outputIndex < outputs.length) {
    outputs[outputIndex] = true;
    res.send('Output turned on');
  } else {
    res.status(404).send('Output not found');
  }
});

// Endpoint to turn off an output
app.get('/off', (req, res) => {
  const { id, output } = req.query;
  const outputIndex = parseInt(output) - 1;

  if (id === 'board1' && outputIndex >= 0 && outputIndex < outputs.length) {
    outputs[outputIndex] = false;
    res.send('Output turned off');
  } else {
    res.status(404).send('Output not found');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
