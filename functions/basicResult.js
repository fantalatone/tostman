const bytes = require("pretty-bytes");
const status = require("./status");

module.exports = (res) => {
    const size = bytes(JSON.stringify(res.data).length + JSON.stringify(res.headers).length);
    
    return `\nStatus : ${status(res.status)}\n` + 
        `Time : ${res.custom.time}ms\x1b[0m\n` + 
        `Size : ${size}\n`;
}