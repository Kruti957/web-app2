NoseX=0;
NoseY=0;

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide;
    poseNet.on("pose",GetPoses);
    poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded(){
    console.log("THE POSENET IS INITIALIZED");
}
function draw(){
Image(VIDEO,0,0,400,400);

}

function take_snapshot(){
save("MyFilterImage");
}

function GetPoses(results){
    if(results.lenght>0){
console.log(results);
NoseX=results[0].pose.nose.x;
NoseY=results[0].pose.nose.y;
console.log("NoseX= "+ NoseX+"NoseY= "+ NoseY);
}
}