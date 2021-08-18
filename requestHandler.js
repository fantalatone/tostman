const valid = require("./functions/validURL");
const resultHandler = require("./resultHandler");

module.exports = (axios, args, flags) => {

    axios({
        method: args[0].toUpperCase(),
        url: valid(args[1]),
        headers: {},
        data: args[2] ? JSON.parse(args[2]) : "" 
    })
    .catch(err => err)
    .then((res) => {
        resultHandler(res, args, flags);
    });
}