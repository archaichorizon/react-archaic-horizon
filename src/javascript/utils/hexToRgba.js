// Taken and modified from:
// https://github.com/developersoul/hex-rgba/blob/master/index.js

module.exports = function hexToRgba(hex, opacity) {
    var hexNum = hex.replace('#', '');
    var r = parseInt(hexNum.substring(0, 2), 16);
    var g = parseInt(hexNum.substring(2, 4), 16);
    var b = parseInt(hexNum.substring(4, 6), 16);

    return 'rgba(' + r + ', ' + g + ' ,' + b + ', ' + opacity / 100 + ')';
};
