function getUser(){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res({id:1, name:'Anyy'});
        }, 1000);
    })
}
function getPosts(userId){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(["Title1","Title2"]);
        }, 1000);
    })
}
function getComments(postId){
    return new Promise((res,rej) => {
        setTimeout(() => {
            res(["Very amazing","Keep it up!"]);
        }, 1000);
    })
}
getUser()
.then(function (data) {
    console.log(data);
    return getPosts(data.id);
})
.then(function (titles) {
    console.log(titles);
    return getComments("abcd")
})
.then(function (cmts) {
    console.log(cmts);
    
})
