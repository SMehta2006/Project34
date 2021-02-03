//Create variables here

var dog, dogImage, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  //load images here
  
  dog = loadImage('images/dog.png');
  happyDog = loadImage("images/happyDog.png");
}

function setup() {

  database = firebase.database();

	createCanvas(500, 500);
  
  dog = createSprite(250,250,10,20);
  dog.addImage(dogImage)

  foodStock = database.ref('Food');
  foodStock.on("value", readStock);

}


function draw() {  

  background = color(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);
  }

  drawSprites();

  //add styles here

  textSize(20);
  text("Food Remaining", 220,200);
  fill("black");
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<= 0){
    x = 0;
  }

  else {
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })
}




