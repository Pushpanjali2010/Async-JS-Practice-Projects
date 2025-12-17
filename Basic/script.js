function createToaster(params) {
    return function(s){
        let div = document.createElement("div"); 
        div.textContent = s;
        div.className = `inline-block top-5 right-5 rounded-lg ${params.theme === "dark" ? "bg-gray-600 text-white" : "bg-black text-white" } px-4 py-3 text-sm `
        document.querySelector(".parent").appendChild(div)
        setTimeout(() => {
            document.querySelector(".parent").removeChild(div)
        },params.duration * 1000);
    }
}
let toaster = createToaster({
    positionX: "right",
    positionY: "top",
    theme: "dark",
    duration: 3
})
toaster("Notification here!")
setTimeout(() => {
    toaster("You got promotted!")
}, 2000);