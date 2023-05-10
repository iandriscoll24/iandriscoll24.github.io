document.addEventListener('DOMContentLoaded' , () => {
    const ground = document.querySelector('.ground');
    const ralphie = document.querySelector('.ralphie');
    const game = document.querySelector('.background');

    let gravity = 7;
    let ralphieBottom = 540;
    let ralphieLeft = 100;
    let gameEnded = false;


    function startGame() {
        ralphieBottom -= gravity;
        ralphie.style.bottom = ralphieBottom + 'px';
        ralphie.style.left = ralphieLeft + 'px';
    }
    let gameTime = setInterval(startGame, 20)

    function jump() {
        if (ralphieBottom < 1920) { 
                ralphieBottom += 85;
                console.log(ralphieBottom)
            }
        ralphie.style.bottom = ralphieBottom + 'px';
    }
    document.addEventListener('keyup', jump);

    function createPipe() {
       let pipeLeft = 600;
       let heightModifier = Math.random() * 200;
       let pipeBottom = heightModifier;
       let opening = 600;
       console.log(pipeBottom);
       const pipe = document.createElement('div');
       const topPipe = document.createElement('div');
        if (!gameEnded) {
            pipe.classList.add('pipe');
            topPipe.classList.add('topPipe');
        }
       game.appendChild(pipe);
       game.appendChild(topPipe);
       pipe.style.left = pipeLeft + 'px';
       topPipe.style.left = pipeLeft + 'px';
       pipe.style.bottom = pipeBottom + 'px';
       topPipe.style.bottom = pipeBottom + opening + 'px';

       function movePipes() {
        pipeLeft -=8;
        pipe.style.left = pipeLeft + 'px';
        topPipe.style.left = pipeLeft + 'px';

            if (pipeLeft === -100) {
                clearInterval(pipeTime)
                game.removeChild(pipe)
                game.removeChild(topPipe)
            }
            if (pipeLeft > 0 && pipeLeft <= 150 && ralphieLeft === 100 && ralphieBottom < pipeBottom + 200 || ralphieBottom === 0) {
                gameOver();
                clearInterval(pipeTime);
            }
        }
        let pipeTime = setInterval(movePipes, 20)
        if (!gameEnded) { 
            setTimeout(createPipe, 2000)
        }
    }
    createPipe();

    function displayImage(src, width, height, alt) {
        var img = document.createElement("img");
        img.src = src;
        img.width = width;
        img.height = height;
        img.alt = alt;
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.transform = "translate(-50%, -50%)";
        document.body.appendChild(img);
       }

    function gameOver() {
        clearInterval(gameTime);
        gameEnded = true;
        console.log('game over');
        displayImage('gameOver.png', 1080, 1080, 'Game Over')
        document.addEventListener('keyup', restart);
        clearInterval(timer);

    }

    function restart() {
        window.location.reload(true);
    }

    var timer;
    var ele = document.getElementById('timer');

    (function (){
        var sec = 50;
        var min = 0;
        timer = setInterval(()=>{
        ele.innerHTML = 'Timer: 0' + min + ':' + sec;
        sec ++;
        if (sec == 60) {
            sec = 0;
            min = min + 1;
        }
    }, 1000)
    })() 
    
})