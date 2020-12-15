const path = require('path');
const multer = require('multer');
console.log('entra al menos');

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        path.join(__dirname, '../app/uploads')
    },
    filename: function(req, file, cb) {
        cb(null, `file.fieldname.${file.mimetype.split('/')[1]}`)
        console.log(file.filename);
    }
})

module.exports = storage