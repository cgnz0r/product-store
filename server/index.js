require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const adminRoutes = require('./admin/routes/index')
const customerRoutes = require('./customer/routes/index')

const app = express()

app.use(express.json())
app.use('/api', customerRoutes)
app.use('/api/admin', adminRoutes)

const PORT = process.env.PORT || 5000

const start = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECT_STR)
        app.listen(PORT, () => {
            console.log('server started on: http://localhost:' + PORT)
        })
    } catch (e) {
        console.log(e)
    }
}

start()