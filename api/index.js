const express = require('express')
const cors = require('cors')
const mongoose = require("mongoose")
const User = require('./models/Users')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const app = express()

const salt = bcrypt.genSaltSync(10);
const secret = 'asdfe45we45w345wegw345werjktjwertkj';
app.use(express.json());

app.use(cors());

mongoose.connect("mongodb+srv://tuan:tuan123@cluster0.dxscbtu.mongodb.net/blog?retryWrites=true&w=majority")
mongoose.set('strictQuery', false);


app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    try {
        const userDoc = await User.create({
            username,
            password: bcrypt.hashSync(password, salt)
        });
        res.json(userDoc);
    } catch (e) {
        res.status(400).json(e);
    }
});

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const userDoc = await User.findOne({ username });
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if (passOk) {
        // logged in
        jwt.sign({ username, id: userDoc._id }, secret, {}, (err, token) => {
            if (err) throw err;
            res.cookie('token', token).json(ok);
            res.cookie('token', token).json({
                id: userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('wrong credentials');
    }

})


app.listen(5000)
