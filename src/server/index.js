const dotenv = require('dotenv');
dotenv.config();
let path = require('path');
const port = 8000;
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');

const app = express();

//middleware--
app.use(express.static("dist"));
app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//API
const baseURL = 'https://api.meaningcloud.com/sentiment-2.1?';
const apiKey = process.env.API_KEY;

//Routes
app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('dist/index.html'));
});

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

app.post('/data', async (req, res) => {
    let url = req.body.url;
    const apiURL = `${baseURL}key=${apiKey}&url=${url}&lang=en`;
    const response = await fetch(apiURL);
    const data = await response.json();
    res.send(data);
})

// designates what port the app will listen to for incoming requests
app.listen(port, () => {
    console.log(`Server is listening on port ${port}!`);
});