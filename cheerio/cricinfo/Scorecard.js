const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs");

request('https://www.espncricinfo.com/series/ipl-2020-21-1210595/mumbai-indians-vs-chennai-super-kings-1st-match-1216492/full-scorecard', reqcallback);
function reqcallback(err, res, html) {
    let $ = cheerio.load(html);
    let playertables = $("tbody");
    let Totalfooter = $("tfoot tr");
    for (let i = 0; i < 4; i++) {
        if (i == 0 || i == 2) {
            let score = [];
            let playertable = $(playertables[i]).find('tr');
            for (let j = 0; j < playertable.length; j++) {
                let row = $(playertable[j]).find('td');
                if ($(row[0]).text().length > 0) {
                    score.push({
                        Batting: $(row[0]).text(),
                        Taken_by: $(row[1]).text(),
                        Run: $(row[2]).text(),
                        Ball: $(row[3]).text(),
                        "4s": $(row[4]).text(),
                        "6s": $(row[6]).text(),
                        SR: $(row[7]).text()
                    })
                }
            }
            if (i == 0) {
                let TotalCol = $(Totalfooter[0]).find("td");
                score.push({
                    Batting: $(TotalCol[0]).text(),
                    Taken_by: $(TotalCol[1]).text(),
                    Run: $(TotalCol[2]).text(),
                    Ball: $(TotalCol[3]).text(),
                })
            }
            else {
                let TotalCol = $(Totalfooter[2]).find("td");
                score.push({
                    Batting: $(TotalCol[0]).text(),
                    Taken_by: $(TotalCol[1]).text(),
                    Run: $(TotalCol[2]).text(),
                    Ball: $(TotalCol[3]).text(),
                })
            }
            fs.writeFileSync("Score" + i + ".json", JSON.stringify(score));
        }
        else {
            let playertable = $(playertables[i]).find('tr');
            let score = [];
            for (let j = 0; j < playertable.length; j++) {
                let row = $(playertable[j]).find('td');
                if ($(row[0]).text().length > 0) {
                    score.push({
                        BOWLING: $(row[0]).text(),
                        O: $(row[1]).text(),
                        M: $(row[2]).text(),
                        R: $(row[3]).text(),
                        W: $(row[4]).text(),
                        ECON: $(row[5]).text(),
                        "0s": $(row[6]).text(),
                        "4s": $(row[7]).text(),
                        "6s": $(row[8]).text(),
                        WD: $(row[9]).text(),
                        NB: $(row[10]).text()
                    })
                }
            }
            fs.writeFileSync("Score" + i + ".json", JSON.stringify(score));
        }
    }
}