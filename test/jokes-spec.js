const { expect, assert } = require( 'chai');
const apiRandom = require('../api/random-api');
//const should = require('chai').should();
//const axios = require ('axios');

    describe('Jokes from Norris', async function () {
      it('Should get a new upon each request', async function () {
        const joke1 = await apiRandom.getRandomJoke();
        const joke2 = await apiRandom.getRandomJoke();

          //Verify status code 
        expect(joke1.status).to.equal(200);
        expect(joke2.status).to.equal(200);
      
        //Verify jokes are not the same
        expect(joke1.data.value).not.to.equal(joke2.data.value);
      });

      it('Should get random joke', async function () {
        const joke1 = await apiRandom.getRandomJoke();
        const joke2 = await apiRandom.getRandomJoke();

          //Verify status code 
        expect(joke1.status).to.equal(200);
        expect(joke2.status).to.equal(200);
      
        //Verify jokes are not the same
        expect(joke1.data.value).not.to.equal(joke2.data.value);
      });

      it('Should get a new upon each request', async function () {
        const joke1 = await apiRandom.getRandomJoke();
        const joke2 = await apiRandom.getRandomJoke();

          //Verify status code 
        expect(joke1.status).to.equal(200);
        expect(joke2.status).to.equal(200);
      
        //Verify jokes are not the same
        expect(joke1.data.value).not.to.equal(joke2.data.value);
      });
 
    });