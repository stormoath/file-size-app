'use strict'

const fs = require("fs");

module.exports = {
  getFileSize: function(req,res,next){
    let sizeRaw = req.file.size
    let result = {
      "size": sizeRaw
    }
    res.writeHead(200, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify(result));
  }   
}