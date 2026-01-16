function makebubble() {

    var clutter = " ";

    for (let i = 1; i <= 200; i++) {
        let change = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${change}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}



var timer = 60;
function runtimer() {
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;


            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").textContent = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

var hitrn = 0;
function getnewhit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitval").textContent = hitrn;
}

var score = 0;
function incscore() {

    document.querySelector("#scoreval").textContent = score;
    score += 10;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
    // alert("chal rha h");
    var clickedno = (Number(dets.target.textContent));
    if (clickedno == hitrn) {
        incscore();
        makebubble();
        getnewhit();
    }
})


getnewhit();
runtimer();
makebubble();
incscore();