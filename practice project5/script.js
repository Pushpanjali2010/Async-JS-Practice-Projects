function getUserData(username) {
    return fetch(`https://api.github.com/users/${username}`).then((raw) => {
        if(!raw.ok) throw new Error("User not found!");
        else return raw.json();
    })
}

function getRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort/updated`).then((raw) => {
        if(!raw.ok) throw new Error("User not found!");
        else return raw.json();
    })
}

let searchbtn = document.querySelector(".search");
let userinp = document.querySelector(".userinp");
searchbtn.addEventListener("click",function(){
    let username = userinp.value.trim();
    if(username.length > 0){
        getUserData(username).then((data) => {
            console.log(data);
            
        });
    }
    else { 
        alert();
    }
})
getRepos("pushpanjali2010").then(function (data) {
    console.log(data);
    
})