const request = require('request')

exports.Welcome = function(req, res) {   
    res.send("Welcome to my API services,please type /search or /detail to check my result :)");
}