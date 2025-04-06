const a = document.querySelector("#desc-btn")
const b = document.querySelector("#desc-boxs")
let aTextNew = a.innerText
a.innerText = "<"
let bTextNew = a.innerText
console.log(bTextNew);















function parent(){
    if(a.innerText === "<"){
         b.classList.add("desc2")
         a.innerText = aTextNew
         a.style.backgroundColor = "black"
         a.style.color = "white"
         a.style.border = "none"
         
        
    }else if(a.innerText === ">"){
        b.classList.remove("desc2")
        a.innerText = "<"
        a.style.backgroundColor = "red"
         a.style.color = "white"
    }
}

a.onclick = parent

