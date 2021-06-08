'use strict';
/* 엄격하게 검토하겠다 - 안해도무방 */

// window.onload 프로퍼티를 이용해 코드실행
// window.onload = function(){
//     var toggle = document.getElementById('toggle');
//     console.log(toggle);
// }

var toggle = document.getElementById('toggle');
var navbar = document.querySelector('.navbar');
console.log(toggle);
console.log(navbar);

// toggle을 클릭했을때
toggle.addEventListener('click', function(){
    this.classList.toggle('active');
    navbar.classList.toggle('active');
    // navbar에 classList에 active 붙여줘
});

/* arrow top 구현 */
/* 
1. 초기상태는 숨긴다 - > css (완료)
2. 스크롤이 일정부분 내려오면 보이게 한다 if
3. 스크롤이 일정부분 올라가면 숨기게 한다 else
4. arrow top 을 클릭하면 스크롤을 최상단으로 올린다
    addEventLIstener('scroll', function(){})
*/
// >>>>>>>>>>>>0607
// const arrowTop = document.getElementById('arrowTop');
// document.addEventListener('scroll', function(){
//     console.log('>>>>> scroll');
//     console.log(window.scrollY);
//     if(window.scrollY > 73){
//         arrowTop.classList.add('visible');
//     }else{
//         arrowTop.classList.remove('visible')
//     }
// })
// />>>>>>>>>>>>>>>>> 0608
// header fix
const arrowTop = document.getElementById('arrowTop');
const aboutSection = document.getElementById('about');
const aboutHeight = aboutSection.clientHeight;
// clientHeight = 스크롤바 section 높이 구하기 - 검색 알아봄
const header = document.getElementById('header');

document.addEventListener('scroll', function(){
    console.log('>>>>> scroll');
    console.log(window.scrollY);
    if(window.scrollY > aboutHeight){
        arrowTop.classList.add('visible');
    }else{
        arrowTop.classList.remove('visible')
    }
    // 스크롤이 되었을때 header 가 fixed가 되어라
    if(window.scrollY > 0){
        header.classList.add('fixedHead');
    }else{
        header.classList.remove('fixedHead');
    }
    // 랜더링 한번되고 실행되서 오류 났었음
})

// arrow top 클릭 했을떄 scroll이 제일 위로 올라가게
arrowTop.addEventListener('click', function(event){
    // event가 발생하면 event객체는 자동으로 전달된다
    
    // a 태그는  기본적으로 이동의 기동을 가지고 있다
    // 그래서 scrollTo 이전에 화면 이동이 발생해 버린다
    // 그러므로 preventDefault()로 막는다
    console.log(event);
    event.preventDefault();
    console.log('>>>>> arrow top');
    window.scrollTo({top: 0, behavior: 'smooth'});
})

// navbar 클릭시 스크롤 이동
var navbarItem = document.querySelectorAll('.navbar__item a');
// var aboutSection = document.querySelector('#about');
console.log(navbarItem);

navbarItem.forEach(function(item){
   
    item.addEventListener('click', function(event){
        event.preventDefault();
        console.log(event);

        toggle.classList.remove('active');
        navbar.classList.remove('active');

        // about
        // skills
        // portfolio

        // "" 해당화면으로이동
        // 위 event콘솔에서 확인 : target 안에 dataset이 존재
        var target = event.target.dataset.link;

        console.log(target);
        var element = document.querySelector(target);
        console.log(element);
        element.scrollIntoView({behavior: "smooth"});
        // aboutSection.scrollIntoView({behavior: "smooth"});
    })  


    
})

// navbarItem[0].addEventListener('click', function(event){
//     event.preventDefault();
//     navbarItem[0].scrollIntoView({behavior: "smooth"});
// }

// element.scrollIntoView()