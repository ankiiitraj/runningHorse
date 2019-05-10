let cloud1, cloud2, backG, tile, xp = 1024, xn = 0, c1, c2;
let sprite, spriteSheet, flower;
let hPosX, hPosY, index = 0;
let horse = [];
function back()
{
  image(backG, xp, 0, 1024, 256);
  for(var i = 0; i < 4; i++) image(tile, xp + 256*i, 230);
  image(backG, xn, 0, 1024, 256);
  for(var i = 0; i < 4; i++) image(tile, xn + 256*i, 230);
  image(flower, xp, 210, flower.width/1.7, flower.height/1.7);
  if(xp <= -1024) xp = 1024;
  if(xn <= -1024) xn = 1024;
  xp = xp - 8;
  xn = xn - 8;
}

function preload()
{
  cloud1 = loadImage("background/cloud-1.png");
  cloud2 = loadImage("background/cloud-0.png");
  backG = loadImage("background/scroll_bg_far.png");
  tile = loadImage("tile/tile.png");
  flower = loadImage("background/flower-open.png") 
  spriteSheet = loadJSON("background/sprite.json");
  sprites = loadImage("background/horse.png");
}

function setup()
{
  createCanvas(1024, 358);
  c1 = new cloud(cloud1);
  c2 = new cloud(cloud2);
  let frame = spriteSheet.frames;
  for(var i = 0; i < frame.length; i++)
  {
    let pos = frame[i].position;
    let img = sprites.get(pos.x, pos.y, pos.w, pos.h);
    horse.push(img);
  }
  hPosX = width/2 - horse[0].width;
  hPosY = 265 - horse[0].height;
}

function draw()
{
  background(0);
  back();
  c2.show();
  c2.move();
  c1.show();
  c1.move();
  image(horse[floor(index) % horse.length], hPosX, hPosY);
  index += 0.2; 
}