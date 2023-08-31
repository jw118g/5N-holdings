//드롭다운 박스
const dropDown = document.querySelector('.dropdown')
const dropBtn = document.querySelector('.dropbtn')
const dropBtnTxt = document.querySelector('.dropbtn span')
const dropBtnIcon = document.querySelector('.dropbtn img')
const dropListBox = document.querySelector('.dropdown-contents')
const dropList = document.querySelectorAll('.dropdown-content li')

dropDown.addEventListener('click',function(){
    dropListBox.classList.toggle('show')
    dropBtnIcon.classList.toggle('rotate')
    
})
dropList.forEach(function(t,i){
    t.addEventListener('click',function(){
        dropBtnTxt.innerText = t.innerText
    })
})
document.addEventListener("click", function (e) {
    const obj = e.target
    if(obj.closest('.dropdown') === null){
        dropListBox.classList.remove('show')
        dropBtnIcon.classList.remove('rotate')
    }
})

/* const sectionContainer = document.querySelector('.section-container')
const section = document.querySelector('#section1')
const sectionH = section.offsetHeight */

const mobileMenuBtn = document.querySelector('.m-menu-btn')
const mobileMenu = document.querySelector('.m-menu')
const mobileMenuList = document.querySelectorAll('.m-menu li')

mobileMenuBtn.addEventListener('click',function(){
    mobileMenu.classList.toggle('active')
    mobileMenuBtn.classList.toggle('active')
})
mobileMenuList.forEach(function(index){
    index.addEventListener('click',function(){
        mobileMenu.classList.remove('active')
    })
})

// top 버튼
const topBtn = document.querySelector('#topBtn')

topBtn.addEventListener('click',function(){
    window.scrollTo(0,0);
    document.scrollTo(0,0);
})

window.onscroll = function() {scrollFunction()};
    function scrollFunction() {
        if (document.body.scrollTop > window.innerHeight || document.documentElement.scrollTop > window.innerHeight) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
}

const universe = document.querySelector('.bubble-wrap')
    const numStar = 100
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min; //최댓값은 제외, 최솟값은 포함
    }
    for(var i = 0; i < numStar; i++) {
        makeStar(universe)
    }
    function makeStar(target){
        const star = document.createElement('div')
        star.setAttribute('class','stars')
        const delayTime = Math.random() * 3
        const starCss = `top:${getRandomInt(-100, 200)}%;left:${getRandomInt(-500, 600)}%;animation-delay:${delayTime}s`
        star.setAttribute('style', starCss) 
        target.appendChild(star)
        setTimeout(function(){
            star.remove()
            makeStar(universe)
            return 0
        }, (delayTime+2.4)*1000)
    }

const roller = document.querySelector('.img-container')
roller.id = 'roller1'

const clone = roller.cloneNode(true)
clone.id = 'roller2'
document.querySelector('.client-logo-wrap').appendChild(clone)

//document.querySelector('#roller1').style.left = '0px';
//document.querySelector('#roller2').style.left = roller.offsetWidth + 'px';