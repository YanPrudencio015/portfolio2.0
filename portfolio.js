




function menuMobile(){

const options = document.querySelectorAll(".options");


function activeButton(){

    options.forEach(option=>{
        option.classList.remove("active");
        this.classList.add("active")
    })
    
}

options.forEach(option =>{
    option.addEventListener("click",activeButton)
})



const profileBtn = document.getElementsByClassName("options")[0]
const menuMainBtn = document.getElementsByClassName("options")[1]
const contactBtn = document.getElementsByClassName("options")[2]
const submenuBack = document.getElementsByClassName("submenu-background")[0];
const profileSubmenu = document.getElementsByClassName("submenu-profile")[0];
const contactSubmenu = document.getElementsByClassName("submenu-contacts")[0];

profileBtn.addEventListener("click",()=>{
    submenuBack.classList.add("submenu-background-active");
    profileSubmenu.classList.add("submenu-profile-Active")
    contactSubmenu.classList.remove("submenu-contacts-Active")
    
})


menuMainBtn.addEventListener("click",()=>{
    submenuBack.classList.remove("submenu-background-active");
    profileSubmenu.classList.remove("submenu-profile-Active")
    contactSubmenu.classList.remove("submenu-contacts-Active")
})


contactBtn.addEventListener("click",()=>{
    submenuBack.classList.add("submenu-background-active");
    contactSubmenu.classList.add("submenu-contacts-Active")
    profileSubmenu.classList.remove("submenu-profile-Active")
    
})




}



menuMobile()




