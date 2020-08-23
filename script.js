const buf = new ArrayBuffer(8)
const view = new DataView(buf)
[64, -124, 12, 0, 0, 0, 0, 0].forEach((b, i) => view.setUint8(i, b))
console.log(view.getFloat64(0))
(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : message) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();
