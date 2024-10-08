const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "Qd4wXL7R#SwGqJEorP0zDB3e0-RWI_vYkYXwinJTEOL1Z7JCUY1s",
MONGODB: process.env.MONGODB || "enter mongodb url",
};
