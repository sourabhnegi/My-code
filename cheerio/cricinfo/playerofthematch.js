let request = require("request");
let cheerio = require("cheerio");

request("https://www.espncricinfo.com/series/ipl-2021-1249214/punjab-kings-vs-delhi-capitals-29th-match-1254086/full-scorecard", requestCallback);

function requestCallback(err, res, html) {
    const $ = cheerio.load(html);
    // console.log($(".playerofthematch-name").length);
    // console.log($($(".playerofthematch-name")[0]).text());
    // console.log($(".match-page-wrapper.scorecard-page-wrapper").html());
    let win = $(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text").text();
    console.log("Winning Details -> " + win);
}