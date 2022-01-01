const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5000

app.use(express.Router())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

/** Connect Mongo DB */
mongoose.connect("mongodb://localhost:27017/taskTrackDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("Database connected successfully");
})

/** Register User */
const userRoter = require('./routes/userRouter');
app.use("/user", userRoter)

/** Login User */
const loginRouter = require("./routes/loginRoute")
app.use("/login", loginRouter)

/** Task */
const taskRouter = require("./routes/taskRoute")
app.use("/task", taskRouter)


app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))