const path = require("path");
const multer = require("multer");
const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,path.resolve(__dirname,"../../public/images/uploads/users"))
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

module.exports = storage