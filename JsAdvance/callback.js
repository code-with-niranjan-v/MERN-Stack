function a(b){
    b()
}

function display(a){
    console.log(a)
}

a(display)

let count = 0
function counter(){
    count++
    display(count)
}

setInterval(counter,1000)