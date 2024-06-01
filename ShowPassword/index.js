function password(){

            if(pass.type=="password"){
                pass.type="text"
                eye.classList="fa-regular fa-eye"
            }else{
                pass.type="password"
                eye.classList="fa-regular fa-eye-slash"
            }
}

// function reduceOpacity() {
//     var inputBox = document.getElementById('myInput')
//     var currentOpacity = parseFloat(window.getComputedStyle(inputBox).opacity)
       
//     if (currentOpacity === 1) {
//         inputBox.style.opacity = '0.6'
//     } else {
//          inputBox.style.opacity ='1'
//     }
// }

// function opacityDown() {
//     var passBox = document.getElementById('pass')
//     var currentOpacity = parseFloat(window.getComputedStyle(inputBox).opacity)
//     if (currentOpacity === 1) {
//         passBox.style.opacity = '0.6'
//     } else {
//         passBox.style.opacity = '1'
//     }
// }

function reduceOpacity(element) {
    if (element.style.opacity === '1') {
        element.style.opacity = '0.5'
    } else {
        element.style.opacity = '1'
    }
}