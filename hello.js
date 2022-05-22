const canvas = document.querySelector("canvas"); //accessing individual elements in html
console.log(canvas); //print statement
const c = canvas.getContext("2d"); //means outp as 2d ie x and y
canvas.width = innerWidth; //
canvas.height = innerHeight;
const gravity = 9.8;
class Player {
  constructor() {
    this.position = {
      x: 100,
      y: 100,
    };
    this.velocity = {
      x: 0,
      y: 0,
    };
    this.width = 50;
    this.height = 100;
  }

  draw() {
    c.fillStyle = "red";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  update() {
    //this.position.y += this.velocity.y
    this.draw();

    if (this.position.y + this.height + this.velocity.y <= canvas.height) {
      this.position.y += this.velocity.y;
      this.position.x += this.velocity.x;

      this.velocity.y += gravity;
    } else {
      this.velocity.y = 0;
    } ////this.velocity.y = 0
  }
}
class Platform {
  constructor({x,y}) {
    this.position = {
      x,
      y,
    };
    this.width = 200;
    this.height = 20;
  }
  draw() {
    c.fillStyle = "blue";
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}
const platforms = [new Platform({x:100,y:100}), new Platform({x:400,y:500})]
const player = new Player();
let scrollOffset =0
var keys = {
  right: {
    pressed: false,
  },
  left: {
    pressed: false,
  },
  up: {
    pressed: false,
  },
  down: {
    pressed: false,
  },
};
player.draw();
//platform.draw();
//player.update();
//console.log(keys.right.pressed)
function animate() {
  //console.log("go")

  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  platforms.forEach((platform)=>{platform.draw()})
  // platform.draw();
  //player.draw()
  
  if (keys.right.pressed&&player.position.x<400) {
    player.velocity.x += 1;
  } else if (keys.down.pressed) {
    player.velocity.y += 1;
  } else if (keys.up.pressed) {
    player.velocity.y = -50;
  } else if (keys.left.pressed&&player.position.x>100) {
    player.velocity.x -= 1;
  } else{ 
    player.velocity.x = 0;
  }
  if(keys.right.pressed){
    scrollOffset+=5
    platforms.forEach((platform)=>
    {platform.position.x-=5})

   
  }
  else if(keys.left.pressed){
    scrollOffset-=5

    platforms.forEach((platform)=>{
      platform.position.x+=5
    })
  }
  
  platforms.forEach((platform)=>{
  if (player.position.y+player.height<=platform.position.y&&player.position.y+player.height+player.velocity.y>=platform.position.y&&player.position.x+player.width>=platform.position.x&&player.position.x<=platform.position.x+platform.width){
    player.velocity.y = 0
  } 
})
if( scrollOffset>=500){
  console.log("won")}
else if(scrollOffset<=500){
  console.log("still destination awaits")
}

player.update();
}
animate();

addEventListener("keydown", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      keys.left.pressed = true;
      //player.velocity.x -= 0.1
      break;
    case 39:
      keys.right.pressed = true;
      //player.velocity.x += 0.1
      break;
    case 40:
      keys.down.pressed = true;
      //player.velocity.y += 20
      break;
    case 38:
      keys.up.pressed = true;
      //player.velocity.y -= 20
      break;
  }
});
addEventListener("keyup", ({ keyCode }) => {
  console.log(keyCode);
  switch (keyCode) {
    case 37:
      keys.left.pressed = false;
      //player.velocity.x -= 0.1
      break;
    case 39:
      keys.right.pressed = false;
      //player.velocity.x += 0.1
      break;
    case 40:
      keys.down.pressed = false;
      //player.velocity.y += 20
      break;
    case 38:
      keys.up.pressed = false;
      //player.velocity.y -= 20
      break;
  }
});
