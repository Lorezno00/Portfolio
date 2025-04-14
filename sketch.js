function setup(){
    createCanvas(windowWidth,windowHeight)
    background(0)
}

function draw(){
    const w = windowWidth
    const h = windowHeight
    
    translate(width/2,height/2)
    textAlign(CENTER)
    textSize(50)
    text("Il pesce con le scarpe si è tolto le scarpe",0,0)

    const d = min (width,height)*0.3
    const x = sin(frameCount*0.03)*width*0.4
    const y = sin(frameCount*0.016)*width*0.4

    const r = map(sin(frameCount*0.01),-1,1,0,255)
    const g = map(sin(frameCount*0.04),-1,1,0,255)
    const b = map(sin(frameCount*0.02),-1,1,0,255)


    noStroke()
    fill(r,g,b)
    ellipse(x,y,d,d)
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight)
    background(0)
}