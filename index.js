const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, error => {
  if (error) {
    console.log('Failed starting the server', error);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
