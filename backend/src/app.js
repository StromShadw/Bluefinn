import express from 'express';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' });

});

app.get('/about', (req, res) => {
    res.json({ message: 'About Us' });
});

app.listen(process.env.PORT|| port, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT || port}`);
});