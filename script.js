const sidebar = document.querySelector(".sidebar")
const close_icon = document.getElementById("close-icon")
const icon = document.getElementById("icon")

icon.addEventListener("click",()=>{
    sidebar.style.display = "block";
})

close_icon.addEventListener("click",()=>{
    sidebar.style.display = "none"
})