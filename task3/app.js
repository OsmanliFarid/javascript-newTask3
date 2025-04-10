
const btn_dark = document.querySelector("#btn-dark")
const dark_btn_boxs = document.querySelector("#dark-btn-boxs")
console.log(dark_btn_boxs);

btn_dark.onclick = () =>{
      if(btn_dark.innerText === "ac"){
        dark_btn_boxs.innerHTML = ` <div class="calculater-box">
        <div class="calculater-boxs-box">
            <div class="value-boxs">
                <div class="value-box" id="value-start"></div>
            </div>
            <div class="calculater-boxs"> 
                <button class="calculater-btn" id="calculater-btn1">1</button>
                <button class="calculater-btn" id="calculater-btn2">2</button>
                <button class="calculater-btn" id="calculater-btn3">3</button>
                <button class="calculater-btn" id="calculater-btn4">4</button>
                <button class="calculater-btn" id="calculater-btn5">5</button>
                <button class="calculater-btn" id="calculater-btn6">6</button>
                <button class="calculater-btn" id="calculater-btn7">7</button>
                <button class="calculater-btn" id="calculater-btn8">8</button>
                <button class="calculater-btn" id="calculater-btn9">9</button>
                <button class="calculater-btn" id="calculater-btn0">0</button>
                <button class="calculater-btn" id="dot-btn">.</button>
                <button class="calculater-btn" id="calc-btn2">*</button>
                <button class="calculater-btn" id="calc-btn3">/</button>
                <button class="calculater-btn" id="calc-btn4">-</button>
                <button class="calculater-btn" id="calc-btn5">+</button>
                <button class="calculater-btn" id="calc-btn6">=</button>
                <button class="calculater-btn" id="calc-btn7">C</button>
                </div>
        </div>
        
    </div>`
    btn_dark.innerText = "qapat"
      }else if(btn_dark.innerText === "qapat"){
        dark_btn_boxs.innerText = ""
        btn_dark.innerText = "ac"
      }
       
        const value_start = document.querySelector("#value-start")
const calculater_btn1 = document.querySelector("#calculater-btn1")
const calculater_btn2 = document.querySelector("#calculater-btn2")
const calculater_btn3 = document.querySelector("#calculater-btn3")
const calculater_btn4 = document.querySelector("#calculater-btn4")
const calculater_btn5 = document.querySelector("#calculater-btn5")
const calculater_btn6 = document.querySelector("#calculater-btn6")
const calculater_btn7 = document.querySelector("#calculater-btn7")
const calculater_btn8 = document.querySelector("#calculater-btn8")
const calculater_btn9 = document.querySelector("#calculater-btn9")
const calculater_btn0 = document.querySelector("#calculater-btn0")
const dot_btn = document.querySelector("#dot-btn")
const calc_btn2 = document.querySelector("#calc-btn2")
const calc_btn3 = document.querySelector("#calc-btn3")
const calc_btn4 = document.querySelector("#calc-btn4")
const calc_btn5 = document.querySelector("#calc-btn5")
const calc_btn6 = document.querySelector("#calc-btn6")
const calc_btn7 = document.querySelector("#calc-btn7")


calculater_btn1.onclick = () =>{
    value_start.innerText += calculater_btn1.innerText
}
calculater_btn2.onclick = () =>{
    value_start.innerText += calculater_btn2.innerText
}
calculater_btn3.onclick = () =>{
    value_start.innerText += calculater_btn3.innerText
}
calculater_btn4.onclick = () =>{
    value_start.innerText += calculater_btn4.innerText
}
calculater_btn5.onclick = () =>{
    value_start.innerText += calculater_btn5.innerText
}
calculater_btn6.onclick = () =>{
    value_start.innerText += calculater_btn6.innerText
}
calculater_btn7.onclick = () =>{
    value_start.innerText += calculater_btn7.innerText
}
calculater_btn8.onclick = () =>{
    value_start.innerText += calculater_btn8.innerText
}
calculater_btn9.onclick = () =>{
    value_start.innerText += calculater_btn9.innerText
}
calculater_btn0.onclick = () =>{
    value_start.innerText += calculater_btn0.innerText
}
dot_btn.onclick = () =>{
    value_start.innerText += dot_btn.innerText
}
calc_btn2.onclick = () =>{
    value_start.innerText += calc_btn2.innerText
}
calc_btn3.onclick = () =>{
    value_start.innerText += calc_btn3.innerText
}
calc_btn4.onclick = () =>{
    value_start.innerText += calc_btn4.innerText
}
calc_btn5.onclick = () =>{
    value_start.innerText += calc_btn5.innerText
}
calc_btn6.onclick = () =>{
    value_start.innerText += calc_btn6.innerText
    let num1 = null;
    let num2 = null;
    let value = null;
    let mesaj = value_start.innerText
    let newMesaj = mesaj.split("")
    newMesaj.splice(-1,1)

    mesaj = newMesaj.join("")
    if(mesaj.includes("+")){
        let newMesaj2 = mesaj.split("+")
        num1 = +newMesaj2[0]
        num2 = +newMesaj2[1]
        value = num1 + num2
        value_start.innerText = value
        

        
        
    }else if(mesaj.includes("-")){
        let newMesaj2 = mesaj.split("-")
        num1 = +newMesaj2[0]
        num2 = +newMesaj2[1]
        value = num1 - num2
        value_start.innerText = value
        

        
        
    }else if(mesaj.includes("*")){
        let newMesaj2 = mesaj.split("*")
        num1 = +newMesaj2[0]
        num2 = +newMesaj2[1]
        value = num1 * num2
        value_start.innerText = value
        

        
        
    }else if(mesaj.includes("*")){
        let newMesaj2 = mesaj.split("*")
        num1 = +newMesaj2[0]
        num2 = +newMesaj2[1]
        value = num1 * num2
        value_start.innerText = value
        

        
        
    }
    
    
    
        
}
calc_btn7.onclick = () =>{
    value_start.innerText += calc_btn7.innerText
    value_start.innerText = ""
}


}







