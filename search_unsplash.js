const https = require('https');
const query1 = 'stack of folders paper close up colorful';
const query2 = 'audience lecture blurred back';

function search(query) {
  return new Promise((resolve) => {
    https.get('https://api.unsplash.com/search/photos?query=' + encodeURIComponent(query) + '&client_id=YxIqMoExZ08R1M1Hl9xQ-qW0r5Q8V2_Fzj3j10T5l_8&per_page=5', (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try {
          const json = JSON.parse(data);
          console.log("Query:", query);
          json.results.forEach(r => console.log(r.urls.regular, "\n  Description:", r.alt_description));
          resolve();
        } catch (e) {
          console.log("Error parsing JSON:", e.message);
          resolve();
        }
      });
    }).on('error', () => resolve());
  });
}

async function main() {
  await search(query1);
  await search(query2);
}
main();
