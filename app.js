const express =require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const connectDB = require('./config/db')
const exphbs = require('express-handlebars')
//load the config//
dotenv.config({path:'./config/config.env'})

connectDB()

const app = express()

//loging

if(process.env.NODE_ENV === 'development'){
    app.use(morgan('dev'))
}

// Handlebars
app.engine('.hbs',exphbs({defaultLayout: 'main',extname:'.hbs'}))
app.set('veiw engine','.hbs')

app.use('/',require('./routes/index'))

const PORT = process.env.PORT || 3000

app.listen(PORT,console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))