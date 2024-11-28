let symmetry = 6; 
let angle;

function setup() {
  createCanvas(1024, 1024);
  angle = TWO_PI / symmetry;
  background(30); 
  frameRate(10);
}

function draw() {
  background(30, 50);
  let cols = 9; 
  let rows = 9; 
  let cellWidth = width / cols; 
  let cellHeight = height / rows;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * cellWidth; 
      let y = j * cellHeight; 
      
      stroke(0); 
      noFill();
      rect(x, y, cellWidth, cellHeight);
      
      push();
      translate(x + cellWidth / 2, y + cellHeight / 2); 

      for (let k = 0; k < 5; k++) { 
        let x1 = random(-cellWidth / 4, cellWidth / 4);
        let y1 = random(-cellHeight / 4, cellHeight / 4);
        let x2 = x1 + random(-5, 5); 
        let y2 = y1 + random(-10, 10);

        for (let l = 0; l < symmetry; l++) {
          rotate(angle);
          stroke(255, 255);
          strokeWeight(0.5);
          line(x1, y1, x2, y2);
          push();
          scale(1, -1);
          line(x1, y1, x2, y2);
          pop();
        }
      }
      pop();
    }
  }
}
