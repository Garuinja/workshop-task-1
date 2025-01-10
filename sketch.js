function setup() {
  createCanvas(400, 400);
  background(220);
  for(i=0;i<30;i++){
    makeduck(random(0,width),random(0,height)); 
  }
}

function draw() {
  // background(220);
  // for(x=0;x<30;x++){
  //   makeduck(random(0,width),random(0,height)); 
  // }
  // let newduck = random(0, width);
  // makeduck(newduck, newduck+10);
}
function makeduck(x, y){
  fill(255,255,0);
  circle(x, y, 50);
  arc(x+23,y+20,75,75,0,PI);
  line(x+15,y+20,x+23 + (75/2),y+20)
  fill(250,92,1);
  triangle(x - 42,y + 15,x - 21,y + 15,x - 24,y);
  fill(0);
  circle(x,y,20);
  fill(255);
  circle(x - 4,y - 5,10);
}
// function makeduck(){
//   fill(255,255,0);
//   circle(90,100,50);
//   arc(113,120,75,75,0,PI);
//   line(105,120,150,120)
//   //triangle(110,110,100,100,100,110);
//   fill(250,92,1);
//   triangle(48,115,69,115,66,100);
//   fill(0);
//   circle(90,100,20);
//   fill(255);
//   circle(86,95,10);  
// }