const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(__dirname + '/views'))
  //.set('views', path.join(__dirname, 'views'))
  //.set('view engine', 'html')
  //.get('/', (req, res) => res.render('portfolio/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
