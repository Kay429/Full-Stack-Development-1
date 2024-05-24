var fs = require("fs");
var newsItems =
JSON.parse(fs.readFileSync("./data/news.json","utf8"));

var fs = require("fs");
var tipItems =
JSON.parse(fs.readFileSync("./data/tips.json","utf8"));

/* GET page */
const news = (req, res) => {
    res.render('news', { title: "Travlr Getaways", newsItems, tipItems});
};

module.exports = {
    news
}