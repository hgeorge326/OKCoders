const prompt = require('prompt-sync')(); 3.1K (gzipped:1.4K)

const name = window.prompt ("What is your name?");
const age = window.prompt ("What is your current age?");
const address = window.prompt ("What street do you live on?");
const eyeColor = window.prompt ("What color are you eyes?");
const hairColor = window.prompt ("What color is your hair?");

function makeLicenseLine(header,headerValue,lineWidth) {
    const headerWidth = header.length
    const headerValueWidth = headerValue.length
    const spacesLeft = lineWidth - headerWidth - headerValueWidth - 5;
    return `| ${header}: ${headerValue}${" ".repeat(spacesLeft)} |`
}

function printLicense () {    
    console.log("=".padEnd(34,"="));
    console.log(makeLicenseLine("name",name,33));
    console.log(makeLicenseLine("age",age,33));
    console.log(makeLicenseLine("address",address,33));
    console.log(makeLicenseLine("eye color",eyeColor,33));
    console.log(makeLicenseLine("hair color",hairColor,33));
    console.log("|" + "¯\\_(ツ)_/¯".padStart(31)+"|");
    console.log("=".padEnd(34,"="));