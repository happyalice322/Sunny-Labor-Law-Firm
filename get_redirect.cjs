const https = require('https');
const http = require('http');

function getRedirectUrl(url) {
  return new Promise((resolve) => {
    https.get(url, (res) => {
      resolve(res.headers.location);
    });
  });
}

async function main() {
  const url1 = await getRedirectUrl('https://source.unsplash.com/featured/?microphone,close-up');
  console.log('Microphone:', url1);
  const url2 = await getRedirectUrl('https://source.unsplash.com/featured/?microphone,lecture');
  console.log('Microphone 2:', url2);
}
main();
