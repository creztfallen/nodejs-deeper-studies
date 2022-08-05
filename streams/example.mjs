// process.stdin.pipe(process.stdout)

// .on('data', (msg) => console.log('data terminal', msg.toString()))

import http from 'http';
import fs from 'fs';

// node -e "process.stdout.write(crypto.randomBytes(1e9))" -> big.file
// http
//   .createServer((req, res) => {
//     // const file = fs.readFileSync('big.file');
//     // res.write(file);
//     // res.end();

//     fs.createReadStream('big.file')
//     .pipe(res)
//   })
//   .listen(3000, () => console.log('running at 3000'));

import net from 'net';

// node -e "process.stdin.pipe(require('net').connect(1338))"
net.createServer(socket => socket.pipe(process.stdout)).listen(1338)