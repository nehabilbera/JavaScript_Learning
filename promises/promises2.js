// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) => {
//     return response.json()
// })
// .then((res) => {
//     console.log(res);
// })
// .catch((error) =>
//     console.log(error));

const a  = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("yoyo");
        resolve();
    },1000)
})

a.then(function(){
    console.log("Honey Singh");
})

async function getAll(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

getAll()