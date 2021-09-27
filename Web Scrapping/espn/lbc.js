const request = require("request");
const cheerio = require("cheerio");
url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/ball-by-ball-commentary";

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
    //over.
    let ballArr = selectorTool('.match-comment-over');
    let ball = selectorTool(ballArr[0]).text();
    //last ball status.
    let BallstatusArr = selectorTool('.match-comment-run');
    let bs = selectorTool(BallstatusArr[0]).text();
    //last ball commentry.
    let commentryArr = selectorTool('.match-comment-long-text');
    let lbc = selectorTool(commentryArr[1]).text();
    console.log("Over -> " + ball + " \r\n" + "Last ball status -> " + bs);
    console.log("Last ball commentry -> " + lbc);
}