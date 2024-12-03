
const https = require('node:https');
const fs = require('node:fs');

const options = {
    pfx: fs.readFileSync('test_cert.pfx'),
    passphrase: 'sample',
};

https.createServer(options, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(8000);