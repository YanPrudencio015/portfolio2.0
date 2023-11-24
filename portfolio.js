




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


const submenuLinks = document.querySelectorAll(".submenu-profile-links");

submenuLinks.forEach(submenuLink =>{
    submenuLink.addEventListener("click",()=>{
        submenuBack.classList.remove("submenu-background-active");
        contactSubmenu.classList.remove("submenu-contacts-Active")
        profileSubmenu.classList.remove("submenu-profile-Active")
    })
})




}
menuMobile()



function MenuSide(){
const btnOpenMenuSide = document.querySelector(".btn-menu");
const btnIconOpenMenuSide = document.querySelector(".fa-bars");
const btnCloseMenuSide = document.querySelector(".menuSide-close-icon");
const backgroundMenuSide = document.getElementsByClassName("menuSide-Background")[0];

const menuSide = document.querySelector(".menuSide-container");

const optionsBtn1 = document.getElementsByClassName("dropDown-button")[0]
const optionsBtn2 = document.getElementsByClassName("dropDown-button")[1]

const dropDownContainerProfile = document.getElementsByClassName("dropDown-container")[0]
const dropDownContainerContact = document.getElementsByClassName("dropDown-container")[1]

document.addEventListener("click", e =>{
    if(e.target == btnOpenMenuSide || e.target == btnIconOpenMenuSide){
        backgroundMenuSide.classList.add("backgroundMenuSide-Open");
        menuSide.classList.add("menuSide-container-Open")
        
    }else if(e.target == btnCloseMenuSide || e.target == backgroundMenuSide){
        backgroundMenuSide.classList.remove("backgroundMenuSide-Open")
        menuSide.classList.remove("menuSide-container-Open")
        // backgroundMenuSide.classList.add("menuSide-Background")
        dropDownContainerContact.classList.remove("dropDown-container-Open")
        dropDownContainerProfile.classList.remove("dropDown-container-Open")

    }
    
    
    if(e.target == optionsBtn1){
        console.log("profile")
        dropDownContainerProfile.classList.toggle("dropDown-container-Open");
        dropDownContainerContact.classList.remove("dropDown-container-Open")
    } else if(e.target == optionsBtn2){
        console.log("contact")
        dropDownContainerContact.classList.toggle("dropDown-container-Open")
        dropDownContainerProfile.classList.remove("dropDown-container-Open")
    } 

})


const links = document.getElementsByClassName("dropDown-link")


for(var link of links){
    link.addEventListener("click", ()=>{
        backgroundMenuSide.classList.add("backgroundMenuSide-Open")

    })
}
}

MenuSide()

function CardLogic(){

    const cardsDetailsBtn = document.querySelectorAll(".detailsBtn")

cardsDetailsBtn.forEach( btn=>{

    btn.addEventListener("click",()=>{

        let control =  btn.parentElement;
        let card = control.parentElement;
        let details =  card.getElementsByClassName("card-details")[0]
        
        details.classList.remove("cardDetailsClose")
        details.classList.add("cardDetailsOpen");

    })
})



const closeDetailsBtns = document.querySelectorAll(".card-detail-title");

closeDetailsBtns.forEach(closeDetailsBtn =>{

    closeDetailsBtn.addEventListener("click", ()=>{
        const detailsContainer = closeDetailsBtn.closest(".card-details");
        detailsContainer.classList.add("cardDetailsClose")


    })
})


}    
    
    CardLogic()



  






// const cardCloseBtns = document.querySelectorAll(".card-detail-title")
// cardCloseBtns.forEach(cardCloseBtn =>{
//     cardCloseBtn.addEventListener("click", ()=>{
//         const cardDetailsContainer = cardCloseBtn.closest(".card-details")
//         cardDetailsContainer.classList.add("cardDetailsClose")
       
//     })
// })

