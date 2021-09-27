const request = require('request');
const cheerio = require('cheerio');

let url = 'https://www.espncricinfo.com/series/ipl-2020-21-1210595/delhi-capitals-vs-mumbai-indians-final-1237181/full-scorecard';
request(url, cb);

function cb(err, resp, html) {
    if (err) {
        console.log(err);
    } else {
        extractionHtml(html);
    }
}

function extractionHtml(html) {
    let selectorTool = cheerio.load(html);
    let bowlerTableArr = selectorTool('.card.content-block.match-scorecard-table .table.bowler');
    // console.log(bowlerTableArr.length);
    let hwtPlayer = "" //> highest wicket tacking player.
    let now = 0; //now ->  no of wickets.
    for (let i = 0; i < bowlerTableArr.length; i++) {
        let bowlerTable = selectorTool(bowlerTableArr[i]);
        //let bowlerTable = selectorTool(bowlerTableArr[i]).html(); by using this we created BowlerTable.html 
        // console.log(bowlerTable); and this also return html code of above line
        let allBowler = selectorTool(bowlerTable).find('tbody>tr')
            // console.log(allBowler.length);
            // console.log(bowlerTable);
        for (let j = 0; j < allBowler.length; j++) {
            let ColumOfEachPlayerArr = selectorTool(allBowler[j]).find('td');
            // console.log(ColumOfEachPlayerArr.length);
            let playerName = selectorTool(ColumOfEachPlayerArr[0]).text();
            let currNumofWicket = selectorTool(ColumOfEachPlayerArr[4]).text();
            if (ColumOfEachPlayerArr.length == 1) continue;
            // console.log(playerName);
            // console.log(NumofWicket);
            if (currNumofWicket > now) {
                now = currNumofWicket;
                hwtPlayer = playerName;
            }
        }
    }
    console.log('Highest Wicket Taking Player is -> ' + hwtPlayer);
    console.log('Number of Wickets -> ' + now);
}