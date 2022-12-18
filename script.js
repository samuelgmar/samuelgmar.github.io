function onScanSuccess(decodedText, decodedResult) {
    const element = $("#code");
    const textToReplace = element.text();
    const newText = decodedResult.decodedText;
    element.text(newText); 
    console.log(`Code scanned = ${decodedText}`, decodedResult);
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10 });
html5QrcodeScanner.render(onScanSuccess);
