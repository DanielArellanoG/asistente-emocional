const { readFile } = require("fs");

const express=requiere('express');
const app=express();

app.get('/',(request,response)=>{
    readFile('./index.html','utf8',(err,html)=>{

        if(err){
            response.status(500).send('Lo siento, hubo un error')
        }
        response.send(html);
    })
});



app.listen(process.env.PORT||3000,()=>console.log(`App disponible en http://localhost:3000`))
