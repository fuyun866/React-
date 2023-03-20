const jwt = require("jsonwebtoken");

const secret = "javascript";

const sign = (data) => jwt.sign(data, secret, { expiresIn: 60 * 60 * 24 * 3 });


const verify = (token) => {
  return new Promise((resolve,reject)=>{
    jwt.verify(token, secret, (err, decode) => {
        if (err) {
          reject(err)
        } else {
          resolve(decode)
        }
      });
  })
};

module.exports = {
  sign,
  verify,
};
