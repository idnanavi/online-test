const request = require('request');
const Connection = require('../config/db.config');
const url = "http://www.omdbapi.com/" ;
const key = "?apikey=faf7e5bb&s" ;
const param = "&s=Batman&page=2" ;
const db = require("../config/sequelize.config");
const Log = db.logs;

exports.Search = function(req, res) {   
    function SearchMovies(url) {
        return new Promise(function (resolve, reject) {
            request(url, function (error, res, body) {
            if (!error && res.statusCode == 200) {
                resolve(body);
            } else {
                reject(error);
            }
            });
        });
    }
    function CreateLog(){
        const log = {
            API: "search",
            Param: param,
          };
        Log.create(log)
            .then(data => {
                console.log("Log have been created....");
            })
            .catch(err => {
                res.status(500).send({
                message:
                    err.message || "Some error occurred while creating log."
                });
            });
        }
    async function main() {
        let result = await SearchMovies(url+key+param);
        res.send(result);
        CreateLog();
      }
      main();
}
