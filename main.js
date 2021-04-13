function preload() {}

function setup() {
    canvas=createCanvas(500,500)
    canvas.position(100,250)
    video=createCapture(VIDEO)
    video.size(400,400)
    video.hide()
    tintcolor=""
}
function draw() {
    image(video,50,50,400,400)
    tint(tintcolor)
    fill("red")
    rect(0,0,500,50)
    rect(0,0,50,500)
    rect(0,450,500,50)
    rect(450,0,50,500)
}
function take_snapshot() {
    save("image.png")
}
function apply() {
    tintcolor=document.getElementById("colori").value
}