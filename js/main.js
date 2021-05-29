// FOR MY PROJECT I was inspired by my friends and our upcoming graduation. 
// It seems like we were so randomly brought together.
// So and so immigrated to America and got X job and met Y person and so on. 
// Until we ended up at the same University, same dorm, same house, same Chemistry class. 
// And somehow we made it to graduation together. 
// It feels so random, and yet the world is changed because of it.
// Now our time together will add to the chance events of the future. 
// I don't know what happens next, but I'm grateful for the four years I got to spend at this school,
// with these people. 
// It was perhaps a random occurance, but one that lives on through the ways that it has changed me. 
// Each of the dots reflects a person- just as we all come from different places, they move at 
// different speeds, change direction in different ways, and have different colors. 
// Upon collision with each other, they may or may not change colour
// just as sometimes a connection or opportunity for growth is missed in life.
// The colours change while they are connected, but remain changed after they seperate. 
// Every load of the page is another history.

let x = innerWidth / 2;
let y = innerHeight / 2;
let dy = 4
let dx = 4
let r = Math.floor(Math.random() * 255)  + 100;
let g = Math.floor(Math.random() * 255)  + 150;
let b = Math.floor(Math.random() * 255)  + 150;

let x1 = innerWidth / 2;
let y1 = innerHeight / 2;
let dy1 = -5
let dx1 = -3
let r1 = Math.floor(Math.random() * 255)  + 100;
let g1 = Math.floor(Math.random() * 255)  + 150;
let b1 = Math.floor(Math.random() * 255)  + 150;

let x2 = innerWidth / 2;
let y2 = innerHeight / 2;
let dy2 = -3
let dx2 = 2
let r2 = Math.floor(Math.random() * 255)  + 100;
let g2 = Math.floor(Math.random() * 255)  + 150;
let b2 = Math.floor(Math.random() * 255)  + 150;

let x3 = innerWidth / 2;
let y3 = innerHeight / 2;
let dy3 = 3
let dx3 = -4
let r3 = Math.floor(Math.random() * 255)  + 100;
let g3 = Math.floor(Math.random() * 255)  + 150;
let b3 = Math.floor(Math.random() * 255)  + 150;

function setup() {
  createCanvas(innerWidth, innerHeight)
  background(0)
}

function draw() {
  background (0)
  textSize(32);
  fill(255);
  textFont('Georgia');
  text('stay with us even when we left them,', 30, innerHeight/2);
  text('changing not just our weathers', 30, innerHeight/2 + 36);
  text('but our climates.', 30, innerHeight/2 + 36 + 36);
  textSize(16);
  text('-Mcfarlane, Landmarks', 30, innerHeight/2 + 36 + 36 + 36);
  for (i = 0 ; i < innerWidth / 80 ; i ++) {
    stroke(255)
    point(random(0, innerWidth), random(0, innerHeight))
  }
  let d = width / 12;
  let r = d / 2;

  x += dx
  y += dy

  x1 += dx1
  y1 += dy1

  x2 += dx2
  y2 += dy2

  x3 += dx3
  y3 += dy3


  //  BOUNDARIES
  
  if (y > height - r || y < r) {
    dy = -dy
  }

  if (x > width - r || x < r) {
    dx = -dx
  }

  if (y1 > height - r || y1 < r) {
    dy1 = -dy1
  }

  if (x1 > width - r || x1 < r) {
    dx1 = -dx1
  }

  if (y2 > height - r || y2 < r) {
    dy2 = -dy2
  }

  if (x2 > width - r || x2 < r) {
    dx2 = -dx2
  }

  if (y3 > height - r || y3 < r) {
    dy3 = -dy3
  }

  if (x3 > width - r || x3 < r) {
    dx3 = -dx3
  }

  // CHANGING NOT JUST OUR WEATHERS, BUT OUR CLIMATES
  // 0 + 1
  if (
    (y >= y1 - r && y <= y1 + r) && 
    (x >= x1 - r && x <= x1 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r = random(100, 255)
      r1 = random(100, 255)
    }
    if (chance == 2){
      g = random(100, 255)
      g1 = random(100, 255)
    }
    if (chance == 3){
      b = random(100, 255)
      b1 = random(100, 255)
    }

    dy =  -dy + 1
    dy1 = -dy1 + 1


  }

  // 0 + 2
  if (
    (y >= y2 - r && y <= y2 + r) && 
    (x >= x2 - r && x <= x2 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r = random(100, 255)
      r2 = random(100, 255)
    }
    if (chance == 2){
      g = random(100, 255)
      g2 = random(100, 255)
    }
    if (chance == 3){
      b = random(100, 255)
      b2 = random(100, 255)
    }

    dy =  -dy + 1
    dy2 = -dy2 + 1


  }

  // 1 + 2
  if (
    (y1 >= y2 - r && y1 <= y2 + r) && 
    (x1 >= x2 - r && x1 <= x2 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r1 = random(100, 255)
      r2 = random(100, 255)
    }
    if (chance == 2){
      g1 = random(100, 255)
      g2 = random(100, 255)
    }
    if (chance == 3){
      b1 = random(100, 255)
      b2 = random(100, 255)
    }

    dy1 =  -dy1 + 1
    dy2 = -dy2 + 1


  }

  // 0 + 3
  if (
    (y >= y3 - r && y <= y3 + r) && 
    (x >= x3 - r && x <= x3 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r = random(100, 255)
      r3 = random(100, 255)
    }
    if (chance == 2){
      g = random(100, 255)
      g3 = random(100, 255)
    }
    if (chance == 3){
      b = random(100, 255)
      b3 = random(100, 255)
    }

    dy =  -dy + 1
    dy3 = -dy3 + 1

    }
  
  // 1 + 3
  if (
    (y1 >= y3 - r && y1 <= y3 + r) && 
    (x1 >= x3 - r && x1 <= x3 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r1 = random(100, 255)
      r3 = random(100, 255)
    }
    if (chance == 2){
      g1 = random(100, 255)
      g3 = random(100, 255)
    }
    if (chance == 3){
      b1 = random(100, 255)
      b3 = random(100, 255)
    }

  dy1 =  -dy1 + 1
  dy3 = -dy3 + 1

  }

  // 2 + 3
  if (
    (y2 >= y3 - r && y2 <= y3 + r) && 
    (x2 >= x3 - r && x2 <= x3 + r)){
    chance = round(random(1,3))
    console.log (chance)
    if (chance == 1){
      r2 = random(100, 255)
      r3 = random(100, 255)
    }
    if (chance == 2){
      g2 = random(100, 255)
      g3 = random(100, 255)
    }
    if (chance == 3){
      b2 = random(100, 255)
      b3 = random(100, 255)
    }

  dy2 =  -dy2 + 1
  dy3 = -dy3 + 1

  }

  fill (r, g, b)
  ellipse(x, y, d)

  fill (r1, g1, b1)
  ellipse(x1, y1, d)

  fill (r2, g2, b2)
  ellipse(x2, y2, d)

  fill (r3, g3, b3)
  ellipse(x3, y3, d)

}

