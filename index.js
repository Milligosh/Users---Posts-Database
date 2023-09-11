require('./src/config/database.config')
const express=require('express');
const app= express();

const ap1Version1= require('./src/config/versioning/v1');
const envConfig =require('./src/config/env/index')

app.use(express.json());
const PORT =envConfig.APP_PORT||8000

app.listen(PORT,()=>{
    console.log(`The server is running on port ${PORT}`)
});
app.use('/v1',ap1Version1)
module.exports= app;