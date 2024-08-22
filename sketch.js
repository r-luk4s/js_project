function setup() {
    createCanvas(600, 400);
     background(7,208,243);
  }
  
  
  function draw() {
    
    stroke ("lightblue");
    fill ("white");
   
    
    // console.log(mouseIsPressed);
    
    if (mouseIsPressed){
      rect(mouseX, mouseY, 20, 35);
    }
  }