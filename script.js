let board = document.getElementById("id1");
let button = document.getElementById("id2");
let score = document.getElementById("score");
let highscore = document.getElementById("highscore");
let speed = 19;
let lastPaintTime = 0;
let x = 5;
let y = 50;
let x1 = 5;
let y1 = 6;
let cactus;
let boy;
let deno = 400;

let s = 0;
let hs = 0;

score.innerHTML = "Score:-0";
highscore.innerHTML = "HighScore:-0";

function collision() {
    return x === x1 && y === y1;
}

let move = () => {
        s+=1; 
        score.innerHTML = `Score:- ${s}`;

        if(s>=hs){
            hs = s;
            highscore.innerHTML = `HighScore:- ${s}`;
        }

    // cactus moving
    let p1 = new Promise((resolve, reject)=>{
        board.innerHTML = "";
    cactus = document.createElement("div");
     cactus.style.gridRowStart = x;
     cactus.style.gridColumnStart = y;
     cactus.innerHTML = `<img src="cactus.webp" class="image">`;
     board.appendChild(cactus);

      // boy position
    boy = document.createElement("div");
    boy.style.gridRowStart = x1;
    boy.style.gridColumnStart = y1;
    boy.innerHTML = `<img src="run.gif" class="image">`;
    board.appendChild(boy);
    resolve(56);
    })

    //collision
    p1.then((val)=>{
        if (x === x1 && y===5) {
            alert("Game Over! Press Ok to play again");
            console.log("Collision occurred at x, y:", x, y);
            console.log("Boy position at x1, y1:", x1, y1);
            x = 5
            y = 50
            s = 0
            deno = 400;
        } else if (x === x1 && y===6) {
            alert("Game Over! Press Ok to play again");
            console.log("Collision occurred at x, y:", x, y);
            console.log("Boy position at x1, y1:", x1, y1);
            x = 5
            y = 50
            s = 0
            deno = 400;
        }
    
        if (x === x1 && y === 7) {
            boy.innerHTML = `<img src="stop.png" class="image">`;
        }
        if (y === 1) {
            y = 50;
            x = 5;
        }
        
        y = y - 1;
    })

}

function main(ctime) {
    window.requestAnimationFrame(main);
    if(s>1 && s%1000==0) {
        setTimeout(()=>{
            deno = 300;
        }, 1000)
        
    }

    if ((ctime - lastPaintTime) / deno < 1 / speed) {
        return;
    }
    lastPaintTime = ctime;

    move();
    control();
}

let control = ()=>{
    window.addEventListener("keydown", e=>{
        switch(e.key){
            case 'ArrowUp':
                x1=4;
                console.log("arrowUp pressed");
                setTimeout(()=>{
                    x1=5
                }, 300)
            break;
        }
    })
}

button.addEventListener("click", ()=>{
    main();
})

