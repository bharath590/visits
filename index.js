const express = require("express");
const redis = require("redis");
const process = require("process");

const app = express();
const client = redis.createClient({
    legacyMode: true,
    host: 'redis-server',
    port: 6379
});
client.set('visits',0);
app.get("/",(req,res)=>{
    client.get('visits',(err,visits)=>{
        res.send('number of visits '+visits);
        client.set('visits',parseInt(visits)+1);
    })

})

app.listen(8081,()=>{
    console.log("listeing on port 8081");
})
