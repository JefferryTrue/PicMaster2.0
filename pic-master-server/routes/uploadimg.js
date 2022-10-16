
const express = require('express')
const qiniu = require('qiniu')
const router = express.Router()

var accessKey = 'CokwPXQhmF363Kcn3ofq42S4teMpkzo8k92d6Z97';
var secretKey = 'kZAd-rV5BugTGB9wa0H2KiWw5sVhO-zdupsPheVs';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

router.get('/getToken',(req,res) => {
    var options = {
        scope: 'testqiniu3',
    };
    var putPolicy = new qiniu.rs.PutPolicy(options);
    var token = putPolicy.uploadToken(mac);
    res.json({token});
})

module.exports = router

