// const toggleElement = document.getElementById('container')
//     console.log(toggleElement)

//     for (i = 0; i <= 10086; i++){
//         const newCell = document.createElement('div');
//             newPixels.classList.add('pixel')
//             greyScreen.appendChild(newPixels)
//             //parent                  (child)
//             newPixels.addEventListener('mouseenter', colorPixel)
//     }


let mazeRunner = document.querySelector('#mazeRunner')

let moveDistance = 20

window.addEventListener('load', () => {
    mazeRunner.style.position = 'relative'
        mazeRunner.style.left = 0
        mazeRunner.style.top = 0
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            mazeRunner.style.left = parseInt(mazeRunner.style.left) - moveDistance + 'px'
                break
        case 'ArrowRight':
            mazeRunner.style.left = parseInt(mazeRunner.style.left) + moveDistance + 'px'
                break
        case 'ArrowUp':
            mazeRunner.style.top = parseInt(mazeRunner.style.top) - moveDistance + 'px'
                break
        case 'ArrowDown':
            mazeRunner.style.top = parseInt(mazeRunner.style.top) + moveDistance + 'px'
                break
    }
})


function savedClickedElement (evt) {
    //assign the clicked element to a variable to use
        const markedCell = evt.target
        console.log(markedCell)
    } 

    document.querySelectorAll('.cell').forEach(cell => cell.addEventListener('click', savedClickedElement))