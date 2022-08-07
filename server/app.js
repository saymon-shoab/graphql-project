// import express from 'express';
const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const schema = require('./schema/schema')

const app = express();

app.use('/graphql', graphqlHTTP({
    graphiql: true
}))

app.listen(4000,()=> { // localhost 4000 running
    console.log('listenig the request from saymon shoab')
})