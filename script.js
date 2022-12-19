function onScanSuccess(decodedText, decodedResult) {
    console.log(`Code matched = ${decodedText}`, decodedResult);
    const element = $("#code");
    const textToReplace = element.text();
    const newText = decodedResult.decodedText;
    element.text(newText); 
}
let qrboxFunction = function(viewfinderWidth, viewfinderHeight) {
    let minEdgePercentage = 0.2; // 70%
    let minEdgeSize = Math.min(viewfinderWidth, viewfinderHeight);
    let qrboxSize = Math.floor(minEdgeSize * minEdgePercentage);
    return {
        width: 300,
        height: 60
    };
}

let html5QrcodeScanner = new Html5QrcodeScanner(
    "reader",
    { fps: 10, qrbox: qrboxFunction },
    /* verbose= */ false);
html5QrcodeScanner.render(onScanSuccess);
