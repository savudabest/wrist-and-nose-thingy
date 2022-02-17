noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
diference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550,450);
    canvas = createCanvas(550,450);
    canvas.position(500,200);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("posenet is initialized");
}

function draw(){
    background("lightyellow");
    document.getElementById("square_size").innerHTML = "width and height of the square will be = "+diference+" px";
    fill("lightgreen");
    stroke("drakgreen");
    square(noseX,noseY,diference);
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = "+noseX+"nosey = "+noseY);
        leftwristX = results[0].pose.leftWrist.x;
        rightwristX = results[0].pose.rightWrist.x;
        diference =floor(leftwristX - rightwristX);
        console.log("leftwristX is "+leftwristX+"rightwristX is "+rightwristX+"difference is "+diference);
    }
}

