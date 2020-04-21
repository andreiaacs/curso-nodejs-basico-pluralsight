const http = require('http');

// const server = http.createServer((req, res) => {
//     res.end('Hello World\n');
// });

// OR

const requestListener = (req, res) => {
    // res.end('Hello World\n');

    // OR
    // console.log(req, { depth: 0 });
    // console.log(req.url);

    // req, res are streams!
    res.write('Hello World\n');
    res.end();
};

// const server = http.createServer(requestListener);

// OR

const server = http.createServer();
server.on('request', requestListener);


server.listen(4242, () => {
    console.log('Server is running...');
})

console.log('testando nodemon');