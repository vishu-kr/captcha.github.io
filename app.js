let input = document.querySelector('.inpt input')
let btnCheck = document.querySelector('.inpt button')

let captcha = document.querySelector('.captcha i')

let info = document.querySelector('.info')
let btnRefres = document.querySelector('.container button ')


let AllChar = [
    "A","B",'C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'
];

input.addEventListener('keyup', (e)=>{
    let inptLength = input.value;
    if(inptLength.length >0){
        btnCheck.style.display = "block"
    }else{
        btnCheck.style.display = "none"
    }
});


const randomCap = ()=>{
    for(let index =0; index <6;index++ ){
        let randomeCaptcha = AllChar[Math.floor(Math.random()* AllChar.length)]
        captcha.innerHTML +=`${randomeCaptcha}`;
    }
}
randomCap();

btnCheck.addEventListener('click',()=>{
    let inptLength = input.value;
    if(inptLength == captcha.innerHTML){
        info.style.display = "block"
        info.innerHTML = "Captcha is matched"
        info.style.background = "green"
    }else{
        info.style.display = "block"
        info.innerHTML = "Captcha is not matched"
        info.style.background = 'red'
    }
})

btnRefres.addEventListener('click', ()=>{
    captcha.innerHTML = "";
    randomCap();
    info.style.display = "none"
    input.value = "";
})

setInterval(()=>{
    captcha.innerHTML = "";
    randomCap();
    info.style.display = "none"
    input.value = "";
},25000)