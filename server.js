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

var urlsData = [];

// Your first API endpoint
app.post('/api/shorturl', function(req, res) {
  urlsData.push(req.body.url);
  res.json({ original_url: req.body.url, short_url: urlsData.findIndex((url)=>url === req.body.url) + 1 });
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
