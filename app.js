const main_img = document.querySelector(".main-img");
const left = document.querySelector(".right");
const right = document.querySelector(".left");
const dots = document.querySelectorAll(".dot")
let num = 0;

const moveLeft = () => {
    num++;
    if (num < 8){
        main_img.innerHTML=`<img src="./assets/Lam${num}.jpg" class="main-img">`
        dots.forEach(dot=>dot.style.background='grey')
        dots[num].style.background="black"

    }else{
        num=0;
        dots.forEach(dot=>dot.style.background='grey')
        dots[num].style.background="black"
        main_img.innerHTML=`<img src="./assets/Lam${num}.jpg" class="main-img">`
    }
    
}

const moveRight = () => {
    num--;
    if (num > 0){
        dots.forEach(dot=>dot.style.background='grey')
        dots[num].style.background="black"
        main_img.innerHTML=`<img src="./assets/Lam${num}.jpg" class="main-img">`

    }else{
        num=7;
        dots.forEach(dot=>dot.style.background='grey')
        dots[num].style.background="black"
        main_img.innerHTML=`<img src="./assets/Lam${num}.jpg" class="main-img">`
    }
    
}

left.addEventListener('click', moveLeft)
right.addEventListener('click', moveRight)