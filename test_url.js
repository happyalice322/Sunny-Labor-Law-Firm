import fs from 'fs';
import https from 'https';
const req1 = https.get('https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=200', res => console.log('159:', res.statusCode));
const req2 = https.get('https://images.unsplash.com/photo-1516280440502-6178a9467d0f?w=200', res => console.log('151:', res.statusCode));
