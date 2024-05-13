import express from 'express';

const app = express();

//Config ejs
app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'welcome',
        message: 'Hello from EJS',
        people: ['kid', 'kim', 'kin']
    });
});

app.listen(8001, () => console.log('Server Started'));