let a = 0.0;
let slider;
let colorPicker;

function contratcLine(lineNum = 10, x = 100, y = 100){
    size = [x,y]
    for (i = 1; i < lineNum; ++i){
        margin = (size[0]/2)*sin(a)+(size[0]/2);
        line(margin, (size[1]/lineNum)*i, (size[0]/lineNum)*i, size[1]-margin);
    }
    a = a + 0.01;
}

let Atkinson;
function preload() {
    Atkinson = loadFont('Atkinson/atkinson-hyperlegible-regular-102-webfont.woff');
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    noFill();

    colorPicker = createColorPicker('#000000').position(windowWidth-200,windowHeight+600).size(100,50);


    slider = createSlider(10,100,10,5).position(windowWidth-200,windowHeight+510);
    slider.size(100,4);

    xSlider = createSlider(50,800,200).position(windowWidth-200, windowHeight+540)
    xSlider.size(100,4);

    ySlider = createSlider(50,800,200).position(windowWidth-200, windowHeight+570)
    ySlider.size(100,4);
}

function draw(){
    background(245);
    
    
    circle(mouseX, mouseY, 20+mouseX/50);

    strokeWeight(2);
    stroke(colorPicker.color());
    
    let val = slider.value();
    let valX = xSlider.value();
    let valY = ySlider.value();

    translate(windowWidth/2-valX/2,windowHeight/2-valY/2);
    contratcLine(val,valX,valY);
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}