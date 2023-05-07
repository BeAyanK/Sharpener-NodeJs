const path = require('path');

const rootDir = require('../util/path');

exports.getContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'contactus.html'));
}

exports.postContact = (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
}
