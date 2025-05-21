//* Case
const case1 = document.querySelector('#Case1')
const case2 = document.querySelector('#Case2')
const case3 = document.querySelector('#Case3')
const case4 = document.querySelector('#Case4')
const case5 = document.querySelector('#Case5')
const case6 = document.querySelector('#Case6')
const case7 = document.querySelector('#Case7')
const case8 = document.querySelector('#Case8')
const case9 = document.querySelector('#Case9')
const message = document.querySelector('#Message')

//* Symbol
const player1 = `<i class="fa-solid fa-xmark symbolX"></i>`     //* symbolX →  css
const player2 = `<i class="fa-regular fa-circle symbolO"></i>`  //* symoblO →  css

//* Determination of roles
//* player1HasPlayed → false (set by default), SI le joueur 1 n’a pas joué, le joueur 2 ne peut rien faire. Une fois que le joueur 1 a joué, un message s’affiche pour indiquer au joueur 2 que c’est son tour, et ainsi de suite 

//* Player 1
let player1HasPlayed = false

case1.addEventListener('click', (e) => {
    e.preventDefault()

    if (!player1HasPlayed) {
        case1.innerHTML = player1
        player1HasPlayed = true
        return;
    }
    const p = document.createElement('p');
    p.textContent = "Player 1 has played, it's Player 2's turn";
    message.append(p); 
})

