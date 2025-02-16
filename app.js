const express = require('express');
const session = require('express-session');
const userRouter = require('./routes/users');
const { SESSION_SECRET } = require('./crypto/config'); 

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,  
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },  
}));

app.use('/', userRouter);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
