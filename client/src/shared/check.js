'use strict';

exports.isJson = (str) => {
    console.log(str)
    if (typeof str !== 'string') return false;
    try {
        const result = JSON.parse(str);
        const type = Object.prototype.toString.call(result);
        console.log("No Errors")
        return type === '[object Object]' 
            || type === '[object Array]';
    } catch (err) {
        console.log("Error: Caught", err)
        return false;
    }
}