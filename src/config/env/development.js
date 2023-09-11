const dotenv= require('dotenv');

dotenv.config();

const development={
    DATABASE_URL: process.env.DEV_DATABASE_URL,
    APP_PORT: process.env.PORT,
}
module.exports=development