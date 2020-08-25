const express = require('express');
const app = express();
const utils = require('../utils/task-schema');
const loginEndpoint = "https://api.qa.usehero.com/auth/login";

app.use(express.json());


const loginCred = [
    {
        email: "tunde@sayhero.com", 
        password: "Abundance23!"
    }
];


app.post(loginEndpoint, (request, response) => {
    response.send(loginCred);
});




