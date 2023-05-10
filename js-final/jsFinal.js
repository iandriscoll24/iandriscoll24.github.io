document.addEventListener('DOMContentLoaded' , () => {
    const ground = document.querySelector('.ground');
    const ralphie = document.querySelector('.ralphie');
    const game = document.querySelector('.background');

    let gravity = 4;
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
                ralphieBottom += 80;
                console.log(ralphieBottom)
            }
        ralphie.style.bottom = ralphieBottom + 'px';
    }
    document.addEventListener('keyup', jump);

    function createPipe() {
       let pipeLeft = 600;
       let heightModifier = Math.random() * 100;
       let pipeBottom = heightModifier;
       console.log(pipeBottom);
       const pipe = document.createElement('div');
        if (!gameEnded) {
            pipe.classList.add('pipe');
        }
       game.appendChild(pipe);
       pipe.style.left = pipeLeft + 'px';
       pipe.style.bottom = pipeBottom + 'px';

       function movePipes() {
        pipeLeft -=4;
        pipe.style.left = pipeLeft + 'px';

            if (pipeLeft === -100) {
                clearInterval(pipeTime)
                game.removeChild(pipe)
            }
            if (pipeLeft > 0 && pipeLeft <= 150 && ralphieLeft === 100 && ralphieBottom < pipeBottom + 200 || ralphieBottom === 0) {
                gameOver();
                clearInterval(pipeTime);
            }
        }
        let pipeTime = setInterval(movePipes, 20)
        if (!gameEnded) { 
            setTimeout(createPipe, 3000)
        }
    }
    createPipe();

    function gameOver() {
        clearInterval(gameTime);
        gameEnded = true;
        console.log('game over');
    }
})