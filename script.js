function orderFood() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let num = Math.random()  < 0.7;
            if(num){
                resolve();
            }
            else{
                reject();
            }
        }, 2000);
    })
}
orderFood().then(function () {
    console.log("Pizza Delievered");
}).catch(function () {
    console.log("Delievery failed");
    
})