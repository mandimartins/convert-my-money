const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

const port = process.env.PORT || 3000;

app.listen(port, error => {
  if (error) {
    console.log('Failed to start the server', error);
  } else {
    console.log(`Listening on port ${port}`);
  }
});
