require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use('/public', express.static(`${process.cwd()}/public`));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

let shortUrl = 0;

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {
  var urls = {};
  urls[req.body.url] = shortUrl++;

  res.json({ original_url: req.body.url, short_url: urls[req.body.url] });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
