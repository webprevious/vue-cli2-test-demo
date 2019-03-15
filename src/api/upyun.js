var crypto = require('crypto');
function sign(key, secret, method, uri, date, policy=null, md5=null) {
    elems = [];
    [method, uri, date, policy, md5].forEach(item => {
        if (item != null) {
            elems.push(item)
        }
    })
    value = elems.join('&');
    auth = hmacsha1(secret, value);
    return `UPYUN ${key}:${auth}`;
}
function MD5(value) {
    return crypto.createHash('md5').update(value).digest('hex');
}
function hmacsha1(secret, value) {
    return crypto.createHmac('sha1', secret).update(value, 'utf-8').digest().toString('base64');
}
date = new Date().toGMTString();
key = 'web';
secret = 'zxcvbnm1';
method = 'POST';
uri = '/shopdev/';
// 上传，处理，内容识别有存储
console.log(sign(key, MD5(secret), method, uri, date));
// 内容识别无存储，容器云
console.log(sign(key, secret, method, uri, date));