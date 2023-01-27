const http = require("http") //import the http module 

/*create a function server using inbuilt http module and 
its function createserver*/

const server = http.createServer((req, res) =>{
    if (req.url == "/"){
        res.setHeader("Content-Type", "text/html");
        res.write("<h1>home...<h1>");
        res.end();
    }
    if (req.url == "/about"){
        res.write("about page");
        res.end();
    }
});

//server listen at localhost5000
server.listen("5000", "localhost", () => {
    console.log("server running at port 5000")
});