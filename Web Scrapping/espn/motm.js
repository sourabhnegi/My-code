const request = require('request');
const cheerio = require('cheerio');
let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/live-cricket-score';

request(url, cb);

function cb(err, response, html) {
    if (err) {
        console.log(err);
    } else {
        extractionHtml(html);
    }
}

function extractionHtml(html) {
    let selectorTool = cheerio.load(html);
    let nameArr = selectorTool('.playerofthematch-name');
    let name1 = selectorTool(nameArr[0]).text();
    let name2 = selectorTool(nameArr[1]).text();
    console.log("PLAYER OF THE MATCH");
    console.log(name1);
    console.log("PLAYER OF THE SERIES");
    console.log(name2);
}