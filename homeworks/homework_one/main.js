
const https = require('node:https');

https.get('https://jsonplaceholder.typicode.com/posts', (res) => {
    console.log(res)

    res.on('data', (d) => {
        process.stdout.write(d);
    });

}).on('error', (e) => {
    console.error(e);
});
