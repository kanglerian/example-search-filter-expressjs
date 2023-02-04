const express = require('express');
const path = require('path');
const { Op } = require('sequelize');
const app = express();

const { School } = require('./models');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', async (req, res) => {
  const schools = await School.findAll();
  res.render('index', {
    schools: schools
  });
});

app.post('/', async (req, res) => {
  const schools = await School.findAll({
    where: {
      name: {
        [Op.substring]: req.body.search
      }
    }
  });
  res.render('index', {
    schools: schools
  });
});

app.post('/filter', async (req, res) => {
  const schools = await School.findAll({
    where: {
      [Op.and]: [
        req.body.status != 'all' ? { status: req.body.status } : null,
        req.body.address != null ? { address: { [Op.substring]: req.body.address } } : null
      ]
    }
  });
  res.render('index', {
    schools: schools
  });
});

app.listen(3000, () => {
  console.log(`Apps run on http://localhost:3000`)
});