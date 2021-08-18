const axios = require("axios").default;
const con = require("./constants");
const request = require("./requestHandler");

const argv = process.argv.slice(2);

const args = argv.filter(arg => !arg.startsWith("--"));
const flags = argv.filter(arg => arg.startsWith("--"));

if (!args[0]) return console.log("\nPlease enter a method. <method> <url>\n");
if (!args[1]) return console.log("\nPlease enter a url. <method> <url>\n");

if (!con.methods.includes(args[0].toUpperCase())) return console.log("\nWrong Method!\n");

axios.interceptors.request.use( req => {
    req.custom = req.custom || {}
    req.custom.startTime = new Date().getTime()
    return req;
});

const endTime = (res) => {
    res.custom = res.custom || {}
    res.custom.time = new Date().getTime() - res.config.custom.startTime;
    return res;
}

axios.interceptors.response.use( endTime, e => {
    return Promise.reject(endTime(e.response));
});

request(axios, args, flags);