const fs = require('fs')
var path = require('path');
let final = []

module.exports = function (directory, extension, callback) {
    fs.readdir(directory, (err, data) => {
        if (err){
            return callback(err)
        }else{
            const ext = `.${extension}`
            for (const archivo of data) {            
                if (path.extname(archivo) == ext) {
                    final.push(archivo)
                    
                }
            }
        }
        callback(null, final)
    });
    
}

