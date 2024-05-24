var fs = require("fs");
var items =
JSON.parse(fs.readFileSync("./data/rooms.json","utf8"));

/* GET page */
const rooms = (req, res) => {
    res.render('rooms', { title: "Travlr Getaways", items});
};

module.exports = {
    rooms
}