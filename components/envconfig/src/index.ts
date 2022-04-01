import path from "path";
// const path = require('path');

require('dotenv').config({
    path: path.join(process.cwd(), '..', '..', '.env'),
});

module.exports = process.env;
