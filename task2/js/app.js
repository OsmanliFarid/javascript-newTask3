const a = document.getElementById("box-box2")
const b = document.getElementById("box-box1")
const c = document.getElementById("box-box3")

const aImage = a.querySelector("img")
const bImage = b.querySelector("img")
const cImage = c.querySelector("img")




function parent(){
    
    
    let mesaj = bImage.src
    bImage.src = aImage.src
    aImage.src = mesaj
    
}
function parent2(){
    
    let mesaj2 = bImage.src
    bImage.src = cImage.src
    cImage.src = mesaj2
    
   
}


a.onclick = parent
c.onclick = parent2


