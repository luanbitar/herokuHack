const fetch = require('node-fetch')

module.exports = async () => {
  setInterval(async () => {
    const request = await fetch('https://fpf-tracking.herokuapp.com/api/tracking')
    const data = await request.json();
    return data;
  }, 300000);
}
