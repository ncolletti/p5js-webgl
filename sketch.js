// playing with p5.js webGL features

function setup() {
    createCanvas(400, 400, WEBGL);


}

function draw() {
    let size = mouseX - width / 2;
    let shape = mouseY - width / 2;

    background(0);
    normalMaterial();
    push();
    rotateZ(frameCount * 0.01);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    
    torus(size * 2 , shape * 2);
    pop();
    
}