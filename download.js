import fs from 'fs';
import https from 'https';

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      const file = fs.createWriteStream(dest);
      res.pipe(file);
      file.on('finish', () => {
        file.close(() => {
          const stats = fs.statSync(dest);
          console.log(`Saved ${dest}: ${stats.size} bytes`);
          resolve();
        });
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function main() {
  await download("https://images.unsplash.com/photo-1544396821-4dd40b938ad3?auto=format&fit=crop&q=80", "src/assets/images/solution-5-v5.jpg");
  await download("https://images.unsplash.com/photo-1515162816999-a0c47dc192f7?auto=format&fit=crop&q=80", "src/assets/images/solution-6-v5.jpg");
  console.log('done');
}
main();
