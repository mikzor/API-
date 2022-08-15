"use strict";
const Client =require ('./api-client');
//const baseUrl = 'https://api.chucknorris.io/';
//const axios = require('axios');

class Random {
    async getRandomJoke(){
        const response = await Client.get('jokes/random');
   
        return response;
    }
    async getJokeById(){
        const response = await Client.get('jokes/random');
   
        return response;
    }
    async getJokeByName(){
        const response = await Client.get('jokes/random');
   
        return response;
    }

}

module.exports = new Random();