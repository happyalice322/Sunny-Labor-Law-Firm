const https = require('https');
const query1 = 'stack of paper folders close up colorful';

function search(query) {
  return new Promise((resolve) => {
    https.get('https://api.unsplash.com/search/photos?query=' + encodeURIComponent(query) + '&client_id=YxIqMoExZ08R1M1Hl9xQ-qW0r5Q8V2_Fzj3j10T5l_8&per_page=5', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        console.log(data);
        resolve();
      });
    }).on('error', () => resolve());
  });
}

search(query1);
