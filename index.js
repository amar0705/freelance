const JSONserver = require("json-server")
const server = JSONserver.create()
const router = JSONserver.router("./db.json")
const middle = JSON.defaults()

server.use(middle)

server.use(router)

server.listen(3000, ()=>{
    console.log("Listening to port 3000")
})

module.exports = server