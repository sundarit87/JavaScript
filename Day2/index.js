var button = document.getElementById("btn")

button.onclick = function(){
    alert("clicked")
}


var promise1 = new Promise(function(req, reject) {
    setTimeout(function() {
        req('foo');
    }, 300);
});

var promise = document.getElementById('promise')
promise.onclick = function(){
    promise1.then(function (value){
        alert("from Promise req "+value)
    })
    promise1.catch(function (err){
        alert('from error'+err)
    })
}


//async ES7
var async = document.getElementById('async')
async function f(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("from async await!"),1000)
    });
    let result = await promise; //wait till the promise resoles

    alert(result);
}

async.onclick = function(){
    f()
};