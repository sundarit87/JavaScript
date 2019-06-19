var button = document.getElementById("button")

button.onclick = function(){
    alert("Call back event triggered")
}



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


//async ES7
var async = document.getElementById('asyncBtn')
async function fun(){
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("from async await!"),1000)
    });
    let result = await promise; //wait till the promise resoles

    alert(result);
}

async.onclick = function(){
    fun()
};