var cat, catImage, cat_walking, cat_end
var mouse, mouseImage, mouse_walking, mouse_end
var garden, gardenImage
function preload() {
    //load the images here
    catImage = loadImage("images/cat1.png");
    cat_walking = loadAnimation("images/cat2.png" , "images/cat3.png");
    cat_end = loadImage("images/cat4.png");
    mouseImage = loadImage("images/mouse1.png");
    mouse_walking = loadAnimation("images/mouse2.png" , "images/mouse3.png");
    mouse_end = loadImage("images/mouse4.png");
    gardenImage = loadImage("images/garden.png");
    


}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    garden = createSprite(500,400)
    garden.addImage(gardenImage);
    cat = createSprite(800,500,100,100)
    cat.scale = 0.2
    mouse = createSprite(200,500,50,50)
    mouse.scale = 0.1
    cat.addImage(catImage);
    mouse.addImage(mouseImage);




}

function draw() {

    background(1000);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x-mouse.x<cat.width/2-mouse.width/2){
        cat.velocity=0
        cat.x=500;
        cat.y=300;
        cat.changeAnimation(cat_end)
        mouse.changeAnimation(mouse_end)
        
}
    


    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    cat.velocityX=-9
    cat.addAnimation("cat_walking")
    mouse.addAnimation("mouse_walking")
    cat.changeAnimation("cat_walking")
    mouse.changeAnimation("mouse_walking")
    mouse.frameDelay = 25;

}

}
