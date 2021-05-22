const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create getBackgroundImg( ) here
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
     background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here


}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    //change the data in JSON format
    var datetime = responseJSON.datetime;

    // write code slice the datetime
    var hour = datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=04 && hour<=06){
        bg = "sunrise1.png";
    }
    else if(hour>=06 && hour<=08){
        bg = "sunrise2.png";
    }

    else if(hour>=08 && hour<=10){
        bg = "sunrise3.png";
    }

    else if(hour>=10 && hour<=12){
        bg = "sunrise4.png";
    }

    else if(hour>=14 && hour<=16){
        bg = "sunrise5.png";
    }

    else if(hour>=16 && hour<=18){
        bg = "sunrise8.png";
    }

    else if(hour>=18 && hour<=19){
        bg = "sunrise10.png";
    }

    else if(hour>=19 && hour<=22){
        bg = "sunrise11.png";
    }

    else if(hour>=22 && hour<=03){
        bg = "sunrise12.png";
    }

    else{
        bg="sunrise12.png";
    }
    //load the image in backgroundImg variable here

    backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
