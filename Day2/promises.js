var promise1 = new Promise(fucntion (resolve, reject) {
    setTimeout(function () {
        resolve('foo');
    }, 300);
});

var promise = document.getElementById('promise')
promise.onclick = function(){
    promise1.then(function (value){
        alert("from promise"+value)
    })
    promise1.catch(function (err){
        alert('from error'+err)
    })
}