const express = require('express')
const path = require('path')
const mainRoutes= require('./routes/main-routes')

const app = express();
app.set('view engine', 'ejs')
app.set('views','views')
//app.set('views', __dirname + '/views');
//app.set('views', './GuestBook/views');
//app.set('views', path.join(__dirname, 'views'));


app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(mainRoutes)

const PORT = process.env.PORT || 8000
app.listen(PORT, () => console.log(`Server has started on port ${PORT}....`))