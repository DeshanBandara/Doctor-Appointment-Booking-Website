import { randomBytes } from 'crypto';


const crypto = require('crypto');

const randomBytes = crypto.randomBytes(256).toString('base64');
console.log(randomBytes);

const hash = crypto.createHash('md5');
hash.update('your_string_here');
const md5Hash = hash.digest('hex');
console.log(md5Hash);

