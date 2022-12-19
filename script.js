function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code scanned = ${decodedText}`, decodedResult);
    const element = $("#code");
    const textToReplace = element.text();
    const newText = decodedResult.decodedText;
    $("#qr-shaded-region").style("border-width","199px 78px");
    element.text(newText); 
}
var html5QrcodeScanner = new Html5QrcodeScanner(
	"qr-reader", { fps: 10, qrbox: 400 });
html5QrcodeScanner.render(onScanSuccess);

