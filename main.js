const mobileMenu = document.getElementById("mobile-menu")
const mobileMenuTrigger = document.getElementById("mobile-menu-trigger")

let isMenuActive = false;
mobileMenuTrigger.addEventListener("click", (e)=>{
    if(!isMenuActive){
        isMenuActive = true;
        mobileMenuTrigger.innerText = "×"
        mobileMenu.style.display = "block";
    }else{
        mobileMenu.style.display = "none"
        mobileMenuTrigger.innerText = "☰"
        isMenuActive = false
    }
})

mobileMenu.addEventListener("click", ()=>{
    mobileMenu.style.display = "none"
    mobileMenuTrigger.innerText = "☰"
    isMenuActive = false
})
