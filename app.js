const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const port = process.env.PORT || 5000;

const rootDir = __dirname;

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Home Route!
app.get('/', (req, res) => {
  res.redirect('/home');
});

//Main Page

app.get('/home', (req, res) => {
  res.render('home.ejs');
});

app.listen(port, () => `Server running on port ${port} 🔥`);
