let form = document.querySelector('form')
let userName = document.querySelector('#name')
let role = document.querySelector('#role')
let bio = document.querySelector('#bio')
let photo = document.querySelector('#photo')
/* let btn = document.querySelector('form button')
form.addEventListener('submit',function (e) {
    e.preventDefault();
    console.log(e.value);
    
}) */

const userManager = {
    users: [],
    init : function () {
    form.addEventListener('submit', this.submitUser.bind(this))
    },
    submitUser: function (e) {
    e.preventDefault();
    this.addUser()
    
},
    addUser : function () {
        this.users.push({
        userName: userName.value,
        role: role.value,
        bio: bio.value,
        photo: photo.value,  
    })

    form.reset();
    this.renderUI()

    },
        removeUser : function (idx) {
        this.users.splice(idx,1)
        this.renderUI()
    },
    renderUI: function() {
        document.getElementById("cards").innerHTML="";

        this.users.forEach((user, idx) => { 
            const card = document.createElement("div");
card.className =
  "w-64 bg-neutral-900 border border-neutral-700 rounded-2xl p-6 text-center transition hover:-translate-y-2 hover:shadow-xl hover:shadow-neutral-700/40";

// Close button
const close = document.createElement("button");
close.innerHTML = '<i class="ri-close-line"></i>';
close.className =
  "absolute top-3 right-3 text-neutral-400 hover:text-white text-lg";
    close.addEventListener("click", () => {
      this.removeUser(idx);
    });
    

const img = document.createElement("img");
img.className = "w-20 h-20 mx-auto rounded-full border-4 border-neutral-700";
img.src = user.photo;

const name = document.createElement("h3");
name.className = "mt-3 font-semibold";
name.textContent = user.userName;

const role = document.createElement("p");
role.className = "text-sm text-neutral-400 whitespace-normal break-words";
role.textContent = user.role;

const bio = document.createElement("p");
bio.className = "text-sm mt-2 text-neutral-300 whitespace-normal break-words";
bio.textContent = user.bio;

card.append(close,img, name, role, bio);

// append to parent
document.getElementById("cards").appendChild(card);

        })
    }


}
userManager.init()