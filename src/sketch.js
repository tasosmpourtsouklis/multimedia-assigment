// Game control
var stage = 1;
let geraltImg;
let hop=-8;
let fallingSpeed = 0.1;
let minHeight=465
// Classes
var land;
var pl;
let geralt;
// Stage 1
var crate1;
var crate;
var barrel1;
var barrel2;
var sign;
// Stage 2
var lamp;
var crate2;
var crate3;
var crate4;
// Stage 3
var well;

function preload(){

 geraltImg = loadImage('./assets/images/geralt_of_rivia.png');
}

function setup() {
  // Setup
  createCanvas(900, 576);
  rectMode(CENTER);
  textAlign(CENTER);
  imageMode(CENTER);

  // Background
  land = new Landscape();

  //world gravity
  world.gravity.y=10;
  //floor
  floor= createSprite(450,515,900,10);
  floor.collider = 'static'
  // na exafanizetai
  //floor.visible = false;

  //block
  //block=createSprite(400,300,900,10);
  //block.collider='static'; 

  //jumping assets group
  jumpingAssets = new Group();
 

  // Player
  //pl = new Player();
  geralt = createSprite(400,465,80,80);

  //για να ειναι το σωστο collider και να μην χτυπαει στο κενο πριν το κεφαλι του geralt;
  //geralt.setCollider("rectangle",0,0,80,80);

  //για να μην κανει rotate ο geralt 
  geralt.rotationLock = true;
  geraltImg.resize(88,80);
  geralt.addImage(geraltImg);
 


  // Stage 1
  crate1 = new Crate(59, 470);
  crate =  createSprite(59,470, 78, 70);
  crate.collider = 'static';
  

  jumpingAssets.add(crate);
 
  barrel1 = new Barrel(470, 475);
  barrel2 = new Barrel(530, 475);
  sign = new Sign(710, 402);

  // Stage 2
  lamp = new Lamp(503, 397);
  crate2 = new Crate(627, 404);
  crate3 = new Crate(592, 470);
  crate4 = new Crate(659, 470);

  // Stage 3
  well = new Well(311, 440);
}

function draw() {
  
  //call functions
  keyPressed();
  keyReleased();
  //pl.gravity();
  jump(geralt);
  geralt.vel.y += fallingSpeed;

  //!!!!!!!!!!emfanizei exafanizei ta sprites!!!!
  //drawSprites();

  // Background
  land.setStage(stage);
  land.display();

  game(stage);
}

function game(stage) {
  //pl.display();

  if (stage == 1) {
    // Draw classes
    crate1.display();
    barrel1.display();
    barrel2.display();
    sign.display();

    // Collisions  
    //if ((pl.getX() + pl.getWidth() / 2 >= crate1.getX() - crate1.getWidth() / 2) && (pl.getX() - pl.getWidth() / 2 <= crate1.getX() + crate1.getWidth() / 2) && (pl.getY() + pl.getHeight() / 2 >= crate1.getY() - crate1.getHeight() / 2) && (pl.getY() - pl.getHeight() / 2 <= crate1.getY() + crate1.getHeight() / 2) && (pl.getJump() == false)) {
      //pl.setY(pl.getY());
      //pl.setVelocity(0);
      //pl.setJumpCounter(0);
    //}


    //geralt movement
    /*if (kb.pressing('ArrowLeft')) {
      geralt.vel.x = -4;
    }
    else {
      geralt.vel.x = 0;
    }
    
    if (kb.pressing('ArrowRight')) {
      geralt.vel.x = +4;
    }
    else {
      geralt.vel.x = 0;
    }
    */

    // Breaks
  } else if (stage == 2) {
    // Draw classes
    lamp.display();
    crate4.display();
    crate3.display();
    crate2.display();

    // Collisions  

    // Breaks
  } else if (stage == 3) {
    // Draw classes
    well.display();

    // Collisions  
  }
}

// Moves
function keyPressed() {

//geralt movement

  if(keyIsDown(LEFT_ARROW)){

    geralt.vel.x = -5;
  }
  else if(keyIsDown(RIGHT_ARROW)){
    geralt.vel.x = +5;
  }
  else{
    geralt.vel.x = 0;
  }

  
  // Left
  /*if (keyIsDown(LEFT_ARROW)) {
    if ((pl.getX() - pl.getWidth() / 2 >= 5) || (!(stage == 1) && (pl.getX() >= 5))) {
      pl.moveLeft();
    } else if (!(stage == 1)) {
      stage -= 1;
      pl.setX(width);
    }
  }

  // Right
  if (keyIsDown(RIGHT_ARROW)) {
    if ((pl.getX() + pl.getWidth() / 2 <= (width - 5)) || (!(stage == 3) && (pl.getX() <= (width - 5)))) {
      pl.moveRight();
    } else if (!(stage == 3)) {
      stage += 1;
      pl.setX(0);
    }
  }

  // AUTO OUSIASTIKA EINAI TRUE OSO PATAME TO KOUMPI ALLA EINAI LATHOS DIOTI TWRA TO PATAS MIA FORA KAI PHGAINEI PANW 
  // ARA PREPEI NA GINETAI MIA FORA OXI OSO PATAS TO PANW VELOS!!!!!!!!!!!!!!!!!

  // Jump
  if (keyCode === UP_ARROW) {
    //pl.jump();
  }
  
  */

}


function keyReleased(){


/*  if (keyCode === UP_ARROW) {
    //pl.noJump();
  }

  */
} 



//geralt jump

function jump(sprite){

  
    sprite.vel.y += fallingSpeed;
    sprite.y += sprite.vel.y;

    if(sprite.y > minHeight){
      sprite.vel.y=0;
      sprite.y = minHeight;
    
      if(keyIsDown(UP_ARROW)){

        sprite.vel.y= hop;
      }
    }
  

  //EDW THELEI SPRITE GROUPS GIA PLATFORMS BARRELS CRATES KLP

  if(sprite.collided(jumpingAssets)){
    //sprite.vel.y=0;
    //sprite.y = 393;
  
    if(keyIsDown(UP_ARROW)){

      sprite.vel.y= hop;
    }

  }
}