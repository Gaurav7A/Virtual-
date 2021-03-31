//Create variables here
var dog,happyDog,database,foodS,foodStock;
var dogImage,dogImage1;
function preload()
{
	//load images here
  dogImage=loadImage("images/dogImg.png");
  dogImage1=loadImage("images/dogImg1.png");
  
}

function setup() {
	createCanvas(500, 500);
  dog=createSprite(250,250,50,50);
  dog.addImage(dogImage);
 
foodStock=database.ref('Food');
foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogImage);
  }
  Text("Note:Press UP Arrow to Feed Drago Milk", 300,495);
  Fill("white");
  stroke("green");

  drawSprites();
 Text(foodStock);
  //add styles here

}

function readStock(data){
foodS=data.val();
}

function writeStock(x){
  if(x<){

  }
  database.ref('/').update({
    Food:x
  })
}
