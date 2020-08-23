const buf = new ArrayBuffer(8)
const view = new DataView(buf)
[64, -124, 12, 0, 0, 0, 0, 0].forEach((b, i) => view.setUint8(i, b))
alert(view.getFloat64(0))
