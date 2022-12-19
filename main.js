Webcam.set({
    width: 400,
    height: 300,
    image_format: 'jpg',
    jpg_quality: 100
});

Webcam.attach("camera");

function click1() {
    Webcam.snap(function (data_uri) {
        document.getElementById("picture").innerHTML = '<img id="capturedpicture" src="' + data_uri + '" >';
    });
}

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/0iVEMPLlf/model.json', modelready);

function modelready() {
    console.log('Model is working');
}

console.log(ml5.version);

function recognize() {
    img = document.getElementById('capturedpicture');
    classifier.classify(img, result);
}

function result(error, output) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(output);
        document.getElementById('person').innerHTML=output[0].label;
        document.getElementById('accuracy').innerHTML=output[0].confidence.toFixed(3)*100;
    }
}
