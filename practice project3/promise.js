let pr = new Promise(function(res,rej){
    let rn =Math.random()*10;
    if(rn>=5){
        res("Resolved with "+rn)
    }else{
        rej("Rejected with "+rn)
    }
})
/* pr
.then(function(val){
    console.log(val);
})
.catch(function(val){
    console.log(val);
    
}) */

//async, await error handling using try n catch
async function abcd() {
    try {
        let val = await pr;
        console.log(val);
        
    } catch (error) {
        console.log(error);
        
    }
}
abcd()