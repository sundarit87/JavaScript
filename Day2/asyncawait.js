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