"use strict";

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const myArgs = process.argv.slice(2).map((string) => string.toLowerCase());

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(express.json());


//current jank way of swapping between db
let temp;
if (myArgs.includes('backupdb'.toLowerCase()))
    temp = process.env.BRYSE_ATLAS_URI;
else
    temp = process.env.ATLAS_URI;
const uri = temp;
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("database connection successful");
});

const usersRouter = require('./routes/users.route');
const guestRouter = require('./routes/guest.route');
const gameRouter = require('./routes/game.route');

app.use('/users', usersRouter);
app.use('/guest', guestRouter);
app.use('/game', gameRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`)
});