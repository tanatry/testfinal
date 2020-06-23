const p = new Promise(function(resolve, reject){
    setTimeout(function () {
        let sid = 'B6021726';
        if(sid){
            resolve({id:sid , name: 'Tanatat'});
        }else{
            reject(new Error('Error 404 bad Request'));
        }
    },1000);
})

p.then(result => {
    console.log(result);
})
.catch(function(err){
    console.error(err);
})