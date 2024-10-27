const start = document.getElementById('start');
const stop = document.getElementById('stop');
const body = document.querySelector('body');

// console.log(start);
// console.log(stop);
// console.log(body);

const randomColor = function(){
    const hex = "0123456789ABCDEF";
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*16)];
    }
    return color;
}

const name = function(){
    body.style.backgroundColor = randomColor();
    console.log(randomColor());
}

let set;
start.addEventListener('click',function(){
    set = setInterval(name,1000);
})

stop.addEventListener('click',function(){
    clearTimeout(set);
    body.style.backgroundColor = 'white';
    console.log("Stop");
})