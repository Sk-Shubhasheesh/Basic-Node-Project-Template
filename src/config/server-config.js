const dotenv = require('dotenv'); // This line imports the dotenv module, which allows you to load environment variables from a .env file.

dotenv.config(); // This line calls the config() function from the dotenv module, which loads the environment variables from the .env file into the process.env object.

//This line exports an object with the environment variables
module.exports = {
    PORT: process.env.PORT // This line assigns the value of the PORT environment variable from process.env to
                        //   the PORT property of the exported object.So, after using this module, you can access the PORT value by importing this module
}