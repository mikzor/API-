"use strict";
const axios = require('axios');
const norrisUrl = 'https://api.chucknorris.io/';
 
class Random {
    async get(route, token = false){
        let response;
        if(!token) {
            console.log('This is getting executed');
            response = await axios.get(norrisUrl + route);
        }
        else {
            console.log('This is NOT getting executed');
            response = await axios.get(norrisUrl + route, token);
        }
        return response;
    }
    async post(body, token= false){
        let response;
        if(!token) {
            response = await axios.post(norrisUrl + route);
        }
        else {
            response = await axios.post(norrisUrl + route, token);
        }
        
        return response;
    }
}

module.exports = new Random();