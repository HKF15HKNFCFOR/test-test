function log(message) {
  let logArea = document.getElementById('log');
  logArea.innerHTML = logArea.innerHTML + message;
}
log('Something');
const buf = new ArrayBuffer(8)
const view = new DataView(buf)
[64, -124, 12, 0, 0, 0, 0, 0].forEach((b, i) => view.setUint8(i, b))
log(view.getFloat64(0))
alert('ok')
