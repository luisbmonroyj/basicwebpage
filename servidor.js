console.log("esto es una prueba de servidor basico");
   
const http = require ("http");
/*libreria interna de node que hace servidores web*/
function sitioWeb(request,response){
    response.writeHead(200,{"Content-type":"text/html"});
    response.end("Server <strong>runnning </strong>");
}

let servidor = http.createServer(sitioWeb);
servidor.listen(6996, "192.168.1.11");

console.log("Server running on port 6996");
