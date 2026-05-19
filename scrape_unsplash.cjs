const https = require('https');

function downloadHtml() {
  return new Promise((resolve) => {
    https.get('https://unsplash.com/ko/s/%EC%82%AC%EC%A7%84/%EB%A7%88%EC%9D%B4%ED%81%AC', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        const regex = /https:\/\/images\.unsplash\.com\/photo-[\w\-]+/g;
        const matches = data.match(regex);
        if (matches) {
          const unique = [...new Set(matches)];
          console.log(unique.slice(0, 10).join('\n'));
        } else {
          console.log('No matches');
        }
        resolve();
      });
    }).on('error', () => resolve());
  });
}

downloadHtml();
