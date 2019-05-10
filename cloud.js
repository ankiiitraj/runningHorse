class cloud
{
  constructor(clo)
  {
    this.x = random(-10, width);
    this.y = 10;
    this.xSpeed = random(1, 1.5);
    this.cloud1 = clo;
  }

  show()
  {
    image(this.cloud1, this.x, this.y);
  }

  move()
  {
    this.x = this.x + this.xSpeed;
    if(this.x >= width) this.x = -this.cloud1.width;
  }
}

