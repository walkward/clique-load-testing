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
      headers: {
        authorization: `Bearer ${process.env.APP_BEARER_TOKEN}`,
      },
    });
  } catch (err) {
    console.count('Error');
  }
}, 1);
