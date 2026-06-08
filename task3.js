function fakeAPIcall(endpoints) {
    const data = {
        users : ["SQL","HTML","ML"],
        posts : ["DBMS", "WebDev", "Machine Learning"],

    }

    let delay = Math.random() * 2000 + 1000; 
    
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(data[endpoints]);
        }, delay);
    })
}
fakeAPIcall("posts").then(function (data) {
    console.log(data);
    
})
