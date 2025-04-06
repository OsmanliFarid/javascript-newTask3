const a = document.querySelector("#desc-btn")
const b = document.querySelector("#desc-boxs")
let aTextNew = a.innerText
a.innerText = "<"
let bTextNew = a.innerText
const a2 = document.querySelector("#desc-btn2")
const b2 = document.querySelector("#desc-boxs2")
let aTextNew2 = a2.innerText
a2.innerText = "<"
let bTextNew2 = a2.innerText
const a3 = document.querySelector("#desc-btn3")
const b3 = document.querySelector("#desc-boxs3")
let aTextNew3 = a3.innerText
a3.innerText = "<"
let bTextNew3 = a3.innerText















function parent(){
    if(a.innerText === "<"){
         b.classList.add("desc2")
         a.innerText = aTextNew
         a.style.color = "black"
         a.style.border = "1px solid black"
         
        
    }else if(a.innerText === ">"){
        b.classList.remove("desc2")
        a.innerText = "<"
         a.style.color = "black"
         a.style.border = "1px solid black"
    }
}
function parent2(){
    if(a2.innerText === "<"){
         b2.classList.add("desc2")
         a2.innerText = aTextNew2
         a2.style.color = "black"
         a2.style.border = "1px solid black"
         
        
    }else if(a2.innerText === ">"){
        b2.classList.remove("desc2")
        a2.innerText = "<"
         a2.style.color = "black"
         a2.style.border = "1px solid blue"
    }
}
function parent3(){
    if(a3.innerText === "<"){
         b3.classList.add("desc3")
         a3.innerText = aTextNew3
         a3.style.border = "1px solid black"
         a3.style.color = "black"
         
        
    }else if(a3.innerText === ">"){
        b3.classList.remove("desc3")
        a3.innerText = "<"
        a3.style.border = "1px solid blue"
         a3.style.color = "black"
    }
}

a.onclick = parent
a2.onclick = parent2
a3.onclick = parent3

