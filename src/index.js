// Requires
const MongoClient = require("mongodb").MongoClient;
const mongoose = require('mongoose');

// Debug
const instance1 = 'dvllmg01a.ile.montreal.qc.ca:27001';
const instance2 = 'dvllmg01b.ile.montreal.qc.ca:27001';
const instance3 = 'dvllmg01c.ile.montreal.qc.ca:27001/geotrafic';

// Works
connectionTest = `mongodb://${instance1}`

// Does not
connectionString = `mongodb://${instance1},${instance2},${instance3}?replicaSet=rsdvl01`;
console.log(connectionString);

// Setting up the app
const express = require("express");
var app = express();

// Trying to connect -- change ConnectionTest !!work!! to ConnectionString !!does not!!

MongoClient.connect(connectionTest)
  .then(client => {
    console.log("Connected correctly to server through client");
  })
  .catch(err => {
    throw err;
  }
);

mongoose.connect(connectionString)
  .then(client => {
    console.log("Connected correctly to server through mongoose");
  })
  .catch(err => {
    throw err;
  }
);