const video = document.getElementById('video');
const image = document.createElement('img');


function scanBarcode() {
  var format = 'PDF_417';
  var image = document.getElementById('image');
  var canvas= document.createElement('canvas');
  var ctx = canvas.getContext("2d");
  
  ctx.drawImage(image, 0, 0);

  canvas.toBlob((blob) => {
    const reader = new FileReader();
    reader.addEventListener('loadend', () => {
      const arrayBuffer = reader.result;
      var fileData = new Uint8Array(arrayBuffer);

      console.log(fileData)
      console.log(fileData.length)

      var buffer = Module._malloc(fileData.length);
      Module.HEAPU8.set(fileData, buffer);
      var result = Module.readBarcodeFromPng(buffer, fileData.length, true, format);
      Module._free(buffer);

      showScanResult(result);
    });
    reader.readAsArrayBuffer(blob);
  }, 'image/png');
}

function showScanResult(result) {
  if (result.error) {
    document.getElementById("scan_result").innerHTML = '<font color="red">Error: ' + result.error + '</font>';
  } else if (result.format) {
    document.getElementById("scan_result").innerHTML = "Format: " + result.format + "<br/>Text: <pre>" + result.text + "</pre>";
  } else {
    document.getElementById("scan_result").innerHTML = "No barcode found";
  }
}