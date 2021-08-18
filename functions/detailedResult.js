const bytes = require("pretty-bytes");
const status = require("./status");
const time = require("./time");

module.exports = (res) => {
    const size = bytes(JSON.stringify(res.data).length + JSON.stringify(res.headers).length);
    
    const data = JSON.stringify(res.data).substring(1, JSON.stringify(res.data).length - 1);
    const entriesData = data.split(/["]+/).filter(e => e !== '').map((e, i) => {if (i % 4 == 0) return "\x1b[33m"+e+"\x1b[0m";return e});

    const header = JSON.stringify(res.headers).substring(1, JSON.stringify(res.headers).length - 1);
    const entriesHeader = header.split(/["]+/).filter(e => e !== '').map((e, i) => {if (i % 4 == 0) return "\x1b[33m"+e+"\x1b[0m";return e});

    const body = `{\n ${entriesData.map((e, i) => { if (i === 0) return `\t${e}`; if (e === ':') return ' : '; if (e === ',') return ',\n\t'; return e; }).join("")} \n}\n`;
    const headers = `{\n ${entriesHeader.map((e, i) => { if (i === 0) return `\t${e}`; if (e === ':') return ' : '; if (e === ',') return ',\n\t'; return e; }).join("")} \n}\n`;

    return `\nStatus : ${status(res.status)}\n` + 
        `Time : ${time(res.custom.time)}ms\x1b[0m\n` + 
        `Size : ${size}\n\n` +
        `Body : ${body} \n` +
        `Headers : ${headers}\n`
}