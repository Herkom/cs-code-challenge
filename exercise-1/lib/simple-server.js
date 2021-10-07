"use strict";

const fs = require('fs');
const path = require('path');
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;
const staticBasePath = './static';
const open = require('open')



const staticServe = function(req, res) {
    const resolvedBase = path.resolve(staticBasePath);
    const safeSuffix = path.normalize(req.url).replace(/^(\.\.[\/\\])+/, '');
    const fileLoc = path.join(resolvedBase, safeSuffix);
    
    fs.readFile(fileLoc, function(err, data) {
        if (err) {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
        
        res.statusCode = 200;

        res.write(data);
        return res.end();
    });
};

const httpServer = http.createServer(staticServe);

httpServer.listen(port, hostname, () => {
  console.log(`El servidor se está ejecutando en http://${hostname}:${port}/`);
  open(`http://${hostname}:${port}/`);
});