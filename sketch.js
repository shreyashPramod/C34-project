//Create variables here
var dog;
var happyDog;
var dataBase,foods;
var foodStock;

function preload()
{
  //load images here
  dog_img=loadImage("images/dogImg.png");
}

function readStock(data){
  foods=data.val();
}

function writeStock(x){

  if(x<=0){
    x=0;
  }
  else{
    x=x-1;
  }
   dataBase.ref('/').update({
     food:x
     
   })

}

function setup() {
  database=firebase.database();
  
  createCanvas(500, 500);
  dog = createSprite(250,300,10,10);
  dog.addImage(dog_img);
  dog.scale=0.15;

  foodStock=database.ref('Food');
  foodStoke.on("value",readStock);
}

function draw() {  
  background("green");

  noStroke();
  textSize(20)
  fill("white")
  text("Note-Press UP_ARROW KEY TO Feed Dragon Milk!",width-480, 25);

  noStroke();
  textSize(15)
  fill("white")
  text("Food remaining:",150,150);

  dog.display();

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage("image/dogImg1.png");
  }

  drawSprites();
}





