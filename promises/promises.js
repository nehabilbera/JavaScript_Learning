let promiseOne = new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('hello task 1');
    resolve();
  }, 1000);
});

promiseOne.then(function () {
  // console.log('hello 2');
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    // console.log('hello task 2');
    resolve();
  }, 1000);
}).then(function () {
  // console.log('hello 4');
});

const promiseThree = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve({ name: "neha", id: "2022CA054" }); //array,function,anything
  }, 1000);
});

promiseThree.then(function (e) {
  // console.log(e);
  // console.log(e.name);
  // console.log(e.id);
});

const promiseFour = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "neharani", pass: "123@123" });
    } else {
      reject("ERROR : Something wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then(function (users) {
    console.log(users);
  })
  .catch(function (err) {
    console.log(err);
  }).finally(function(){
    console.log('promise is either resolve or reject');
  });
