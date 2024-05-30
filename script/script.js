//Question 2.2.3(g) 

let inp1 = document.querySelector('#inp1')
let inp2 = document.querySelector('#inp2')
let priceF = document.querySelector('#price1')
let priceM = document.querySelector('#price2')
let tot1 = document.querySelector('#femTot')
let tot2 = document.querySelector('#menTot')
let tot = document.querySelector('#tot')
let totBtn = document.querySelector('[type="button"]')

totBtn.addEventListener('click',()=>{
    tot1.innerText = eval(`${priceF.innerText}*${inp1.value}`).toFixed(2)
    tot2.innerText = eval(`${priceM.innerText}*${inp2.value}`).toFixed(2)

    tot.innerText = eval(`${tot1.innerText}+${tot2.innerText}`).toFixed(2)

})