const clock = document.querySelector('#clock')
console.log(clock);

// const time = new Date();

// const hour = time.getHours();
// const minute = time.getMinutes();
// const second = time.getSeconds();
// const nowTime = `${hour}:${minute}:${second}`;

setInterval(function(){
    const date = new Date();
    // console.log(date.toLocaleDateString());
    clock.innerHTML = date.toLocaleTimeString()
},1000);

