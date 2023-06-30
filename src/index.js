const express = require('express');

const { ServerConfig, Logger } = require('./config');

const apiRoutes = require('./routes/index');
//console.log(process.env);
// make express object
const app = express();

app.use('/api', apiRoutes); // It means that any requests starting with '/api' will be handled by the apiRoutes router.
app.listen(ServerConfig.PORT, ()=>{
    console.log(`Successfully started the server on PORT: ${ServerConfig.PORT}`);
    // Logger.info("Successfully started the server", {});
});
