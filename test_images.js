import fs from 'fs';
import https from 'https';

const download = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location).then(resolve).catch(reject);
      }
      if (res.statusCode === 200 || res.statusCode === 201) {
        resolve(`Success: ${url}`);
      } else {
        resolve(`Failed ${res.statusCode}: ${url}`);
      }
    }).on('error', (err) => {
      resolve(`Error: ${url}`);
    });
  });
};

async function main() {
  const urls = [
    "https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1621252178222-0cc655a6d542?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80"
  ];
  for (const url of urls) {
    const r = await download(url);
    console.log(r);
  }
}
main();
