const basicResult = require("./functions/basicResult");
const detailedResult = require("./functions/detailedResult");
const fs = require("fs");

module.exports = (response, args, flags) => {
    
    let output = ""

    if (flags.length === 0) output = basicResult(response);

    if (flags.includes("--d")) output = detailedResult(response);

    if (!flags.includes("--f")) return console.log(output);

    const url = args[1];
    const today = new Date();
    const date = `${today.toDateString()} ${today.getHours()}-${today.getMinutes() < 10 ? `0${today.getMinutes()}`: today.getMinutes()}-${today.getSeconds() < 10 ? `0${today.getSeconds()}`: today.getSeconds()}`;
    
    const finalOutput = (`\nDate : ${date}` + `\nURL: ${url}`).concat(output);
    const fileName = `Tostman Log-${date}.txt`

    fs.writeFileSync(fileName, finalOutput.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, ""))
    return console.log(`Succesfully created ${fileName}`);

}