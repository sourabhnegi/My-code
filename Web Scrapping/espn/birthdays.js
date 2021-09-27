const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");

const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard";

request(url, callback);

function callback(err, res, html) {
    if (err) {
        console.log(err);
    } else
        extractHtml(html);
}

function extractHtml(html) {
    const $ = cheerio.load(html);
    let Players_name = $("tbody");
    // console.log(Players_name.length);
    for (let i = 0; i < 4; i++) {
        let player = $(Players_name[i]).find('tr');
        // console.log(player.length);
        for (let j = 0; j < player.length; j++) {
            let link = $(player[j]).find('a').attr('href');
            // console.log(link);
            if (link) {
                let fullLink = "https://www.espncricinfo.com/" + link;
                // console.log(fullLink);
                getBirthdate(fullLink);
            }
        }
    }
}

function getBirthdate(Link) {
    request(Link, callback)

    function callback(err, res, html) {
        if (err) {
            console.log(err);
        } else
            extractBirthdays(html)
    }
}

function extractBirthdays(html) {
    const $ = cheerio.load(html);
    let playerDetail = $(".player-card-description.gray-900");

    let playerName = $(playerDetail[0]).text();
    let playerDOB = $(playerDetail[1]).text().split(',');
    console.log(chalk.blue("Player Name -> " + playerName));

    let dob = "";
    for (let k = 0; k < 2; k++) {
        dob += playerDOB[k] + ",";
    }
    console.log(chalk.red("DOB -> " + dob));
    console.log();

}