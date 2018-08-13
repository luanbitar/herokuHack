const fetch = require('node-fetch');
const { send } = require('micro');

module.exports = (req, res) => {
  setInterval(async () => {
    const request = await fetch('https://fpf-tracking.herokuapp.com/api/tracking')
    const data = await request.json();
    console.log(data);
    console.log(`\n\n\n\n\n\n\n\n\n\n new Request on: ${new Date()}`);
  }, 300000);
}
