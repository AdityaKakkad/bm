status = "";
objects = [];

function setup(){
    canvas = createCanvas(650,500);
    canvas.position(650,350);

    video = createCapture(VIDEO);
    video.size(650, 500);
    video.hide();
}

function draw(){
    image(video, 0, 0, 650, 500);

        if(status != ""){
            objectDetector.detect(video, gotResult);

            percent = floor(objects[i].confidence*100){
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            fill('red');
            noFill();
            stroke('indianred');
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
}

function start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status_detected").innerHTML = "Status : Detecting Objects"
    status = false;
}
function modelLoaded(){
    console.log("Model has been loaded!");
    status = true;
}

function gotResult(error, results){
    if(error){
        console.log(error + "ERROR");
    }
    {
        console.log(results + "👍")
        objects = results;
    }
}
