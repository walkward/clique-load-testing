require('dotenv').config();
const request = require('request');

let iterations = 0;
let interval = null;
interval = setInterval(() => {
  try {
    iterations += 1;

    // eslint-disable-next-line
    if (iterations == process.env.APP_MAX_ITERATIONS) {
      clearInterval(interval);
    }

    request({
      uri: process.env.APP_TEST_ENDPOINT,
      forever: false,
      headers: {
        authorization: `Bearer ${process.env.APP_BEARER_TOKEN}`,
      },
    });

    if (iterations % 100 === 0) {
      console.log(`${iterations} iterations`);
    }
  } catch (err) {
    console.error(err);
  }
}, process.env.APP_ITERATION_INTERVAL);
