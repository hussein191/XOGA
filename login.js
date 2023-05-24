let PlayerX = document.querySelector('.PlayerX')
let PlayerO = document.querySelector('.PlayerO')
let firest_page = document.querySelector('.home')
let secound_page = document.querySelector('.home_player')
let Turn_X = document.querySelector('.Turn_X')
let Turn_O = document.querySelector('.Turn_O')
let box = document.querySelectorAll('.box')
let third_page = document.querySelector('.home_result')
let resultPlayer = document.querySelector('.resultPlayer')
let outGame = document.querySelector('.outGame')

PlayerX.addEventListener("click",function(){
    firest_page.style.display = "none"
    secound_page.classList.add("display_flex")
    third_page.style.display = "none"
    Turn_X.classList.add("forma")
})
PlayerO.addEventListener("click",function(){
    firest_page.style.display = "none"
    secound_page.classList.add("display_flex")
    third_page.style.display = "none"
    Turn_O.classList.add("forma")
})



for(let i =0; i<box.length;i++){
    box[i].addEventListener("click",function(){
        if(!box[i].textContent){
            if(Turn_X.classList.contains("forma")){
                box[i].textContent = "X"
                box[i].classList.add("Active")
                Turn_X.classList.remove("forma")
                Turn_O.classList.add("forma")
                
            }else{
                box[i].textContent = "O"
                box[i].classList.add("Active")
                Turn_O.classList.remove("forma")
                Turn_X.classList.add("forma")
                
            }
        }
    })
    
}


function WinnerPlayer(){
    for(let i=0; i<box.length;i++){
        if(box[i].classList.contains("Active")){
            if(i === 0 || i === 3 || i === 6 ){
                if(box[i].textContent === box[i+1].textContent && box[i].textContent === box[i+2].textContent && box[i].textContent === "X" ){
                    third_page.style.display = "flex"
                    secound_page.classList.remove("display_flex")
                    firest_page.style.display = "none"
                    resultPlayer.textContent = "X"
                }
                else if(box[i].textContent === box[i+1].textContent && box[i].textContent === box[i+2].textContent && box[i].textContent === "O" ){
                    third_page.style.display = "flex"
                    secound_page.classList.remove("display_flex")
                    firest_page.style.display = "none"
                    resultPlayer.textContent = "O"
                }
                else if(box[i].textContent === box[i+4].textContent && box[i].textContent === box[i+8].textContent && box[i].textContent === "X"){
                    third_page.style.display = "flex"
                    secound_page.classList.remove("display_flex")
                    firest_page.style.display = "none"
                    resultPlayer.textContent = "X"
                }
                else if(box[i].textContent === box[i+4].textContent && box[i].textContent === box[i+8].textContent && box[i].textContent === "O"){
                    third_page.style.display = "flex"
                    firest_page.style.display = "none"
                    secound_page.classList.remove("display_flex")
                    resultPlayer.textContent = "O"
                }
            }
            else if(i === 2){
                if(box[i].textContent === box[i+2].textContent && box[i].textContent === box[i+4].textContent  && box[i].textContent === "X"){
                    third_page.style.display = "flex"
                    firest_page.style.display = "none"
                    secound_page.classList.remove("display_flex")
                    resultPlayer.textContent = "X"
                }else if(box[i].textContent === box[i+2].textContent && box[i].textContent === box[i+4].textContent  && box[i].textContent === "O"){
                    third_page.style.display = "flex"
                    firest_page.style.display = "none"
                    secound_page.classList.remove("display_flex")
                    resultPlayer.textContent = "O"
                } 
            }
        }
    }
}

setInterval(WinnerPlayer,1000)

outGame.addEventListener("click",function(){
    third_page.style.display = "none"
    firest_page.style.display = "flex"
    for(let i =0 ;i<box.length;i++){
        box[i].textContent = ""
    }
})