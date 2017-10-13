const jwt    = require("jsonwebtoken");
const config = require("./config");

/**
 * Walks thru an object (ar array) and returns the value found at the
 * provided path. This function is very simple so it intentionally does not
 * support any argument polymorphism, meaning that the path can only be a
 * dot-separated string. If the path is invalid returns undefined.
 * @param {Object} obj The object (or Array) to walk through
 * @param {String} path The path (eg. "a.b.4.c")
 * @returns {*} Whatever is found in the path or undefined
 */
function getPath(obj, path = "") {
    return path.split(".").reduce((out, key) => out ? out[key] : undefined, obj)
}

function generateRefreshToken(code) {
    let token = {};
    ["context", "client_id", "scope", "user", "iat", "exp"].forEach(key => {
        if (code.hasOwnProperty(key)) {
            token[key] = code[key];
        }
    });
    return jwt.sign(token, config.jwtSecret);
}

module.exports = {
    getPath,
    generateRefreshToken
};