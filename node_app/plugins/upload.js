const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.resolve(__dirname,"../public/imgs/avatar") )
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + file.originalname;
      cb(null,  uniqueSuffix)
    }
  })
  
  const upload = multer({ storage: storage }).single("avatar")

  module.exports = {
    upload
  }