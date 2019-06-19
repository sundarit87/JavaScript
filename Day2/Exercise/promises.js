
var promise1 = new Promise(function(req, reject) {
    setTimeout(function() {
        req('Promises event');
    }, 600);
});

var promise = document.getElementById('promiseBtn')
promise.onclick = function(){
    promise1.then(function (value){
        alert("From Promise req "+value)
    })
    promise1.catch(function (err){
        alert('From Promise error'+err)
    })
}