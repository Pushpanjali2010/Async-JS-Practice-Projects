let searchbtn = document.querySelector(".search");
let userinp = document.querySelector(".userinp");
let card = document.querySelector(".card");

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

function updatedUI(details) {
    console.log(details);
    const formattedDate = new Date(details.created_at).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
});
    
    let data = `<div class="flex flex-col lg:flex-row gap-8">

                <!-- Avatar -->
                <div class="flex justify-center lg:block">
                    <img
                        src="${details.avatar_url}"
                        alt="Profile"
                        class="w-40 h-40 rounded-full border-4 border-slate-700 object-cover"
                    >
                </div>
                <!-- User Details -->
                <div class="flex-1">
                    <!-- Top -->
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                        <div>
                            <h2 class="text-3xl font-bold">${details.name}</h2>
                            <p class="text-blue-400 text-lg">@${details.login}</p>
                        </div>
                        <div class="text-slate-400">Joined ${formattedDate}</div>
                    </div>

                    <!-- Bio -->
                    <p class="text-slate-300 mt-6 leading-relaxed">
                        ${details.bio ? details.bio : ""}
                    </p>

                    <!-- Stats -->
                    <div class="grid grid-cols-3 gap-4 mt-8">
                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center">
                            <p class="text-slate-400 text-sm"> Repositories </p>
                            <h3 class="text-2xl font-bold mt-1"> ${details.public_repos} </h3>
                        </div>

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center">
                            <p class="text-slate-400 text-sm"> Followers </p>
                            <h3 class="text-2xl font-bold mt-1"> ${details.followers} </h3>
                        </div>

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-5 text-center">
                            <p class="text-slate-400 text-sm"> Following </p>
                            <h3 class="text-2xl font-bold mt-1"> ${details.following} </h3>
                        </div>

                    </div>

                    <!-- Info Grid -->
                    <div class="grid md:grid-cols-2 gap-5 mt-8">

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <p class="text-slate-500 text-sm">Location</p>
                            <p class="mt-1 font-medium"> ${details.location ? details.location : "N/A"} </p>
                        </div>

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <p class="text-slate-500 text-sm">Company</p>
                            <p class="mt-1 font-medium"> ${details.company ? details.company : "N/A"} </p>
                        </div>

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <p class="text-slate-500 text-sm"> Hierable </p>
                            <p class="mt-1 font-medium"> ${details.hierable ? details.hierable : "N/A"} </p>
                        </div>

                        <div class="bg-slate-950 border border-slate-800 rounded-xl p-4">
                            <p class="text-slate-500 text-sm">Email</p>
                            <p class="mt-1 font-medium"> ${details.email ? details.email : "N/A"} </p>
                        </div>

                    </div>
                </div>

            </div>`

    card.innerHTML = data;
}



searchbtn.addEventListener("click",function(){
    let username = userinp.value.trim();
    if(username.length > 0){
        getUserData(username).then((data) => {
            updatedUI(data);
            
        });
    }
    else { 
        alert();
    }
})
