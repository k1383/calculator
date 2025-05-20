const case1 = document.querySelector('#Case1')
const case2 = document.querySelector('#Case2')
const case3 = document.querySelector('#Case3')
const case4 = document.querySelector('#Case4')
const case5 = document.querySelector('#Case5')
const case6 = document.querySelector('#Case6')
const case7 = document.querySelector('#Case7')
const case8 = document.querySelector('#Case8')
const case9 = document.querySelector('#Case9')

const symbolX = `<i class="fa-solid fa-xmark"></i>`
const symbolO = `<i class="fa-regular fa-circle"></i>`

case1.addEventListener('click', (e) => {
    e.preventDefault()

    case1.innerHTML = symbolX
    
    
})