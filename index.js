/******* initializing variables *******/

let url="";
let b = document.querySelector(".for-background-img-at-level2 img");
let count = 0;
let menuText1 = document.querySelector(".level1-1-1-1 a");
let menuText2 = document.querySelector(".level1-1-2-1 a");
let menuText3 = document.querySelector(".level1-1-3 a");
let menuText4 = document.querySelector(".level1-1-4 a");
let menuText5 = document.querySelector(".level1-1-5 a");
let menuText6 = document.querySelector(".level1-1-6 a");
let menuText7 = document.querySelector(".level1-1-7 a");
let heading = document.querySelector(".heading1");
let heading1 = document.querySelector(".level2-1-1-1-1 h1");
let heading2 = document.querySelector(".level2-1-1-1-2 h1");
let border1 = document.querySelector(".level1-1-3-1 hr");
let border2 = document.querySelector(".level1-1-4-1 hr");
let border3 = document.querySelector(".level1-1-5-1 hr");
let border4 = document.querySelector(".level1-1-6-1 hr");
let border5 = document.querySelector(".level1-1-7-1 hr");
let navBackground = document.querySelector(".level1-2");
let wrapfakediv = document.querySelector(".wrap-fake-div");
let fakedivText1 = document.querySelector(".wrap-fake-div .level1-1-1-1 a");
let fakedivText2 = document.querySelector(".wrap-fake-div .level1-1-2-1 a");
let fakedivText3 = document.querySelector(".wrap-fake-div .level1-1-3 a");
let fakedivText4 = document.querySelector(".wrap-fake-div .level1-1-4 a");
let fakedivText5 = document.querySelector(".wrap-fake-div .level1-1-5 a");
let fakedivText6 = document.querySelector(".wrap-fake-div .level1-1-6 a");
let fakedivText7 = document.querySelector(".wrap-fake-div .level1-1-7 a");
let realdiv = document.querySelector(".level1-1");
let bgImg = document.querySelector(".bg-Img");
let innerfakediv = document.querySelector(".fake-div");
let start = Date.now();
let level4Front = document.querySelector(".image-switch-front");
let level4Back = document.querySelector(".image-switch-back");
let initialNo = parseInt(document.querySelector(".no1").innerHTML);
let currentNo = 0;

/******* code for forward button *******/

document.querySelector(".front").addEventListener("click",function(){

  if(count===0){
    let a = document.querySelector(".bg-Img");
    if(window.getComputedStyle(a.children[0]).visibility==="visible"){
      url = window.getComputedStyle(a.children[0]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
      console.log("url");
    }
    else if(window.getComputedStyle(a.children[1]).visibility==="visible"){
      url = window.getComputedStyle(a.children[1]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
      console.log("url");
    }
    else if(window.getComputedStyle(a.children[2]).visibility==="visible"){
      url = window.getComputedStyle(a.children[2]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
      console.log("url");
    }
    count=1;
  }
  if(url === "images/img-2.jpg"){
    b.src = "images/img-1.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation")
    // heading.classList.add("js-line-break");
    // heading.textContent="Your pharma labels are \r\n safe with us \r\n a personal kind of care";
    heading.innerHTML="<strong>Your pharma labels are<br>safe with us</strong><br>a personal kind of care";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-black");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-black");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-black");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-black");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-black");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-black");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-black");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-black");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-black");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-black");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-black");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-black");
    menuText7.classList.add("js-paused");
    heading.style.color="black";
    url="images/img-1.jpg";
  }
  else if(url==="images/img-1.jpg"){
    b.src="images/img-3.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation");
    // heading.classList.add("js-line-break");
    // heading.textContent="Differet goals \r\n different labels";
    heading.innerHTML="<strong>Differet goals</strong><br>different labels";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-white");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-white");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-white");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-white");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-white");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-white");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-white");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-white");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-white");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-white");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-white");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-white");
    menuText7.classList.add("js-paused");
    heading.style.color="white";
    url="images/img-3.jpg";
  }
  else{
    b.src="images/img-2.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation");
    // heading.classList.add("js-line-break");
    // heading.textContent="Label printing specialists \r\n with a personal touch";
    heading.innerHTML="<strong>Label printing specialists</strong><br>with a personal touch";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-white");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-white");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-white");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-white");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-white");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-white");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-white");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-white");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-white");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-white");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-white");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-white");
    menuText7.classList.add("js-paused");
    heading.style.color="white";
    url="images/img-2.jpg";
  }
});

/***** code for back button *******/

document.querySelector(".back").addEventListener("click",function(){

  if(count===0){
    let a = document.querySelector(".bg-Img");
    if(window.getComputedStyle(a.children[0]).visibility==="visible"){
      url = window.getComputedStyle(a.children[0]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
    }
    else if(window.getComputedStyle(a.children[1]).visibility==="visible"){
      url = window.getComputedStyle(a.children[1]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
    }
    else if(window.getComputedStyle(a.children[2]).visibility==="visible"){
      url = window.getComputedStyle(a.children[2]).backgroundImage.split("PracticeProject6/").pop().slice(0,-2);
    }
    count=1;
  }
  if(url==="images/img-2.jpg"){
    b.src="images/img-3.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation");
    // heading.classList.add("js-line-break");
    // heading.textContent="Differet goals \r\n different labels";
    heading.innerHTML="<strong>Differet goals</strong><br>different labels";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-white");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-white");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-white");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-white");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-white");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-white");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-white");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-white");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-white");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-white");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-white");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-white");
    menuText7.classList.add("js-paused");
    heading.style.color="white";
    url="images/img-3.jpg";
  }
  else if(url==="images/img-1.jpg"){
    b.src="images/img-2.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation");
    // heading.classList.add("js-line-break");
    // heading.textContent="Label printing specialists \r\n with a personal touch";
    heading.innerHTML="<strong>Label printing specialists</strong><br>with a personal touch";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-white");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-white");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-white");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-white");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-white");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-white");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-white");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-white");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-white");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-white");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-white");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-white");
    menuText7.classList.add("js-paused");
    heading.style.color="white";
    url="images/img-2.jpg";
  }
  else{
    b.src="images/img-1.jpg";
    b.classList.add("js-for-background-img-at-level2");
    heading.classList.add("js-stop-heading-animation");
    heading1.classList.add("js-stop-heading-animation");
    heading2.classList.add("js-stop-heading-animation");
    // heading.classList.add("js-line-break");
    // heading.textContent="Your pharma labels are \r\n safe with us \r\n a personal kind of care";
    heading.innerHTML="<strong>Your pharma labels are<br>safe with us</strong><br>a personal kind of care";
    document.querySelector(".heading1 strong").classList.add("js-increase-font-size");
    border1.classList="";
    border1.classList.add("js-cancel-hover-animation");
    border1.classList.add("js-border-color-black");
    border2.classList="";
    border2.classList.add("js-cancel-hover-animation");
    border2.classList.add("js-border-color-black");
    border3.classList="";
    border3.classList.add("js-cancel-hover-animation");
    border3.classList.add("js-border-color-black");
    border4.classList="";
    border4.classList.add("js-cancel-hover-animation");
    border4.classList.add("js-border-color-black");
    border5.classList="";
    border5.classList.add("js-cancel-hover-animation");
    border5.classList.add("js-border-color-black");
    menuText1.className = "";
    menuText1.classList.add("js-menu-color-black");
    menuText1.classList.add("js-paused");
    menuText2.className = "";
    menuText2.classList.add("js-menu-color-black");
    menuText2.classList.add("js-paused");
    menuText3.className = "";
    menuText3.classList.add("js-menu-color-black");
    menuText3.classList.add("js-paused");
    menuText4.className = "";
    menuText4.classList.add("js-menu-color-black");
    menuText4.classList.add("js-paused");
    menuText5.className = "";
    menuText5.classList.add("js-menu-color-black");
    menuText5.classList.add("js-paused");
    menuText6.className = "";
    menuText6.classList.add("js-menu-color-black");
    menuText6.classList.add("js-paused");
    menuText7.className = "";
    menuText7.classList.add("js-menu-color-black");
    menuText7.classList.add("js-paused");
    heading.style.color="black";
    url="images/img-1.jpg";
  }
});

/******** scroll and change nav-bar *******/

function time(){
  start = Date.now();
}

setInterval(time,10000);

function t(){
  realdiv.style.visibility="visible";
  innerfakediv.style.visibility="hidden";
}

document.addEventListener("scroll",function(){
  if(window.scrollY != 0){
    let stop = Date.now();
    navBackground.classList.add("js-nav-background-height-increase");
    innerfakediv.style.visibility="";
    realdiv.style.visibility="hidden";
    fakedivText1.classList.add("js-paused");
    fakedivText1.classList.add("js-menu-color-black");
    fakedivText2.classList.add("js-paused");
    fakedivText2.classList.add("js-menu-color-black");
    fakedivText3.classList.add("js-paused");
    fakedivText3.classList.add("js-menu-color-black");
    fakedivText4.classList.add("js-paused");
    fakedivText4.classList.add("js-menu-color-black");
    fakedivText5.classList.add("js-paused");
    fakedivText5.classList.add("js-menu-color-black");
    fakedivText6.classList.add("js-paused");
    fakedivText6.classList.add("js-menu-color-black");
    fakedivText7.classList.add("js-paused");
    fakedivText7.classList.add("js-menu-color-black");
    setTimeout(t,(10000-(stop-start)));
  }
  else{
    navBackground.classList.remove("js-nav-background-height-increase");
  }
});

/******** front arrow of level4 ***********/

level4Front.addEventListener("click",function(){

  if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible"){
    currentNo = 2;
    document.querySelector(".black-bg1 img").classList="";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
    document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
    setTimeout(secondAnimation,510);
    document.querySelector(".black-bg2 img").classList="";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
    function secondAnimation(){
      document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
      document.querySelector(".click-div").style.top="355px";
      document.querySelector(".level4-1-3-1").style.borderStyle="none";
      document.querySelector(".p1-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-2").style.borderStyle="solid";
      document.querySelector(".p2-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if((window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible")){
    currentNo = 3;
    document.querySelector(".black-bg2 img").classList="";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
    document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
    setTimeout(secondAnimation, 510);
    document.querySelector(".black-bg3 img").classList="";
      document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
    function secondAnimation(){
      document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
      document.querySelector(".click-div").style.top="305px";
      document.querySelector(".level4-1-3-2").style.borderStyle="none";
      document.querySelector(".p2-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-3").style.borderStyle="solid";
      document.querySelector(".p3-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible"){
    currentNo = 4;
    document.querySelector(".black-bg3 img").classList="";
    document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
    document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
    setTimeout(secondAnimation,510);
    document.querySelector(".black-bg4 img").classList="";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
    function secondAnimation(){
      document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
      document.querySelector(".click-div").style.top="255px";
      document.querySelector(".level4-1-3-3").style.borderStyle="none";
      document.querySelector(".p3-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-4").style.borderStyle="solid";
      document.querySelector(".p4-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"){
    currentNo = 5;
    document.querySelector(".black-bg4 img").classList="";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
    document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
    setTimeout(secondAnimation,510)
    document.querySelector(".black-bg5 img").classList="";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
    function secondAnimation(){
      document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
      document.querySelector(".click-div").style.top="205px";
      document.querySelector(".level4-1-3-4").style.borderStyle="none";
      document.querySelector(".p4-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-5").style.borderStyle="solid";
      document.querySelector(".p5-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else{
    document.querySelector(".black-bg5 img").classList="";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-two");
    document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-two");
    setTimeout(secondAnimation,510);
    document.querySelector(".black-bg1 img").classList="";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-two");
    function secondAnimation(){
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-two");
      document.querySelector(".click-div").style.top="405px";
      document.querySelector(".level4-1-3-5").style.borderStyle="none";
      document.querySelector(".p5-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-1").style.borderStyle="solid";
      document.querySelector(".p1-click").style.visibility="visible";
    }
  }
});

/********* back arrow of level4 ***********/

level4Back.addEventListener("click",function(){

  if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible"){
    document.querySelector(".black-bg1 img").classList="";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-three");
    document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-three");
    document.querySelector(".black-bg5 img").classList="";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-three");
    setTimeout(secondAnimation,501);
    function secondAnimation(){
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-three");
      document.querySelector(".click-div").style.top="205px";
      document.querySelector(".level4-1-3-1").style.borderStyle="none";
      document.querySelector(".p1-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-5").style.borderStyle="solid";
      document.querySelector(".p5-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible"){
    currentNo = 1;
    document.querySelector(".black-bg2 img").classList="";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-three");
    document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
    document.querySelector(".black-bg1 img").classList="";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
    setTimeout(secondAnimation,501);
    function secondAnimation(){
      document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
      document.querySelector(".click-div").style.top="405px";
      document.querySelector(".level4-1-3-2").style.borderStyle="none";
      document.querySelector(".p2-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-1").style.borderStyle="solid";
      document.querySelector(".p1-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible"){
    currentNo = 2;
    document.querySelector(".black-bg3 img").classList="";
    document.querySelector(".black-bg3 img").classList.add("main-bottle3-three");
    document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
    document.querySelector(".black-bg2 img").classList="";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
    setTimeout(secondAnimation,501);
    function secondAnimation(){
      document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
      document.querySelector(".click-div").style.top="355px";
      document.querySelector(".level4-1-3-3").style.borderStyle="none";
      document.querySelector(".p3-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-2").style.borderStyle="solid";
      document.querySelector(".p2-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"){
    currentNo = 3;
    document.querySelector(".black-bg4 img").classList="";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-three");
    document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
    document.querySelector(".black-bg3 img").classList="";
    document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
    setTimeout(secondAnimation,501);
    function secondAnimation(){
      document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
      document.querySelector(".click-div").style.top="305px";
      document.querySelector(".level4-1-3-4").style.borderStyle="none";
      document.querySelector(".p4-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-3").style.borderStyle="solid";
      document.querySelector(".p3-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
  else{
    currentNo = 4;
    document.querySelector(".black-bg5 img").classList="";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-four");
    document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
    document.querySelector(".black-bg4 img").classList="";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
    setTimeout(secondAnimation,501);
    function secondAnimation(){
      document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
      document.querySelector(".click-div").style.top="255px";
      document.querySelector(".level4-1-3-5").style.borderStyle="none";
      document.querySelector(".p5-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-4").style.borderStyle="solid";
      document.querySelector(".p4-click").style.visibility="visible";
    }
    initialNo = currentNo;
  }
});

  /************* handling clicks on numbers ***************/

document.querySelector(".no1").addEventListener("click",function(){
  currentNo = parseInt(document.querySelector(".no1").innerHTML);
  let diff1 = (currentNo - initialNo);
  let y = 0;
  if((currentNo - initialNo) == -1){
    if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible"){
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-three");
      document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
      document.querySelector(".black-bg1 img").classList="";
      document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
        document.querySelector(".click-div").style.top="405px";
        document.querySelector(".level4-1-3-2").style.borderStyle="none";
        document.querySelector(".p2-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-1").style.borderStyle="solid";
        document.querySelector(".p1-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) < -1){
    if(window.getComputedStyle(document.querySelector(".black-bg5 img")).visibility==="visible" && ((diff1) < y)){
      document.querySelector(".black-bg5 img").classList="";
      document.querySelector(".black-bg5 img").classList.add("main-bottle5-four");
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
        document.querySelector(".click-div").style.top="255px";
        document.querySelector(".level4-1-3-5").style.borderStyle="none";
        document.querySelector(".p5-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-4").style.borderStyle="solid";
        document.querySelector(".p4-click").style.visibility="visible";
      }
      y--;
    }
    setTimeout(func1,1000);
    function func1(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-three");
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func2,2000);
    function func2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-three");
        document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
          document.querySelector(".click-div").style.top="355px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-2").style.borderStyle="solid";
          document.querySelector(".p2-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func3,3000);
    function func3(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-three");
        document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
        document.querySelector(".black-bg1 img").classList="";
        document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
          document.querySelector(".click-div").style.top="405px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-1").style.borderStyle="solid";
          document.querySelector(".p1-click").style.visibility="visible";
        }
        y--;
      }
    }
  }

  initialNo = currentNo;
});

document.querySelector(".no2").addEventListener("click",function(){
  currentNo = parseInt(document.querySelector(".no2").innerHTML);
  let diff1 = (currentNo - initialNo);
  let y = 0;
  if((currentNo - initialNo) == 1){
    if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible"){
      document.querySelector(".black-bg1 img").classList="";
      document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
      setTimeout(secondAnimation,510);
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
      function secondAnimation(){
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
        document.querySelector(".click-div").style.top="355px";
        document.querySelector(".level4-1-3-1").style.borderStyle="none";
        document.querySelector(".p1-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-2").style.borderStyle="solid";
        document.querySelector(".p2-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) == -1){
    if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible"){
      document.querySelector(".black-bg3 img").classList="";
      document.querySelector(".black-bg3 img").classList.add("main-bottle3-three");
      document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
        document.querySelector(".click-div").style.top="355px";
        document.querySelector(".level4-1-3-3").style.borderStyle="none";
        document.querySelector(".p3-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-2").style.borderStyle="solid";
        document.querySelector(".p2-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) < -1){
    if(window.getComputedStyle(document.querySelector(".black-bg5 img")).visibility==="visible" && ((diff1) < y)){
      document.querySelector(".black-bg5 img").classList="";
      document.querySelector(".black-bg5 img").classList.add("main-bottle5-four");
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
        document.querySelector(".click-div").style.top="255px";
        document.querySelector(".level4-1-3-5").style.borderStyle="none";
        document.querySelector(".p5-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-4").style.borderStyle="solid";
        document.querySelector(".p4-click").style.visibility="visible";
      }
      y--;
    }
    setTimeout(func1,1000);
    function func1(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-three");
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func2,2000);
    function func2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-three");
        document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
          document.querySelector(".click-div").style.top="355px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-2").style.borderStyle="solid";
          document.querySelector(".p2-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func3,3000);
    function func3(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-three");
        document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
        document.querySelector(".black-bg1 img").classList="";
        document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
          document.querySelector(".click-div").style.top="405px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-1").style.borderStyle="solid";
          document.querySelector(".p1-click").style.visibility="visible";
        }
        y--;
      }
    }
  }

  initialNo = currentNo;
});

document.querySelector(".no3").addEventListener("click",function(){
  currentNo = parseInt(document.querySelector(".no3").innerHTML);
  let diff = (currentNo - initialNo);
  let diff1 = (currentNo - initialNo);
  let z = 0;
  let y = 0;
  if((currentNo - initialNo) == 1){
    if((window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible")){
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
      document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
      setTimeout(secondAnimation, 510);
      document.querySelector(".black-bg3 img").classList="";
      document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
      function secondAnimation(){
        document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
        document.querySelector(".click-div").style.top="305px";
        document.querySelector(".level4-1-3-2").style.borderStyle="none";
        document.querySelector(".p2-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-3").style.borderStyle="solid";
        document.querySelector(".p3-click").style.visibility="visible";
      }
    }
  }
  if((currentNo - initialNo) == -1){
    if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"){
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-three");
      document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
      document.querySelector(".black-bg3 img").classList="";
      document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
        document.querySelector(".click-div").style.top="305px";
        document.querySelector(".level4-1-3-4").style.borderStyle="none";
        document.querySelector(".p4-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-3").style.borderStyle="solid";
        document.querySelector(".p3-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) > 1){
    if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible" && ((diff - 1)>=z)) {
      document.querySelector(".black-bg1 img").classList="";
      document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
      setTimeout(secondAnimation,510);
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
      function secondAnimation(){
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
        document.querySelector(".click-div").style.top="355px";
        document.querySelector(".level4-1-3-1").style.borderStyle="none";
        document.querySelector(".p1-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-2").style.borderStyle="solid";
        document.querySelector(".p2-click").style.visibility="visible";
      }
      z++;
    }
    setTimeout(f1,1000);
    function f1(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible" && ((diff - 1)>=z)) {
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
        setTimeout(secondAnimation, 510);
        document.querySelector(".black-bg3 img").classList="";
          document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f2,2000);
    function f2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible" && ((diff - 1)>=z)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
        document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
        setTimeout(secondAnimation,510);
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
        function secondAnimation(){
          document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
          document.querySelector(".click-div").style.top="255px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-4").style.borderStyle="solid";
          document.querySelector(".p4-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f3,3000);
    function f3(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible" && ((diff - 1)>=z)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
        document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
        setTimeout(secondAnimation,510)
        document.querySelector(".black-bg5 img").classList="";
        document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
        function secondAnimation(){
          document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
          document.querySelector(".click-div").style.top="205px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-5").style.borderStyle="solid";
          document.querySelector(".p5-click").style.visibility="visible";
        }
        z++;
      }
    }
  }

  if((currentNo - initialNo) < -1){
    if(window.getComputedStyle(document.querySelector(".black-bg5 img")).visibility==="visible" && ((diff1) < y)){
      document.querySelector(".black-bg5 img").classList="";
      document.querySelector(".black-bg5 img").classList.add("main-bottle5-four");
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
        document.querySelector(".click-div").style.top="255px";
        document.querySelector(".level4-1-3-5").style.borderStyle="none";
        document.querySelector(".p5-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-4").style.borderStyle="solid";
        document.querySelector(".p4-click").style.visibility="visible";
      }
      y--;
    }
    setTimeout(func1,1000);
    function func1(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-three");
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func2,2000);
    function func2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-three");
        document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
          document.querySelector(".click-div").style.top="355px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-2").style.borderStyle="solid";
          document.querySelector(".p2-click").style.visibility="visible";
        }
        y--;
      }
    }
    setTimeout(func3,3000);
    function func3(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible" && ((diff1) < y)){
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-three");
        document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
        document.querySelector(".black-bg1 img").classList="";
        document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
        setTimeout(secondAnimation,501);
        function secondAnimation(){
          document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
          document.querySelector(".click-div").style.top="405px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-1").style.borderStyle="solid";
          document.querySelector(".p1-click").style.visibility="visible";
        }
        y--;
      }
    }
  }

  initialNo = currentNo;
});

document.querySelector(".no4").addEventListener("click",function(){
  currentNo = parseInt(document.querySelector(".no4").innerHTML);
  let diff = (currentNo - initialNo);
  let z = 0;
  if((currentNo - initialNo) == 1){
    if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible"){
      document.querySelector(".black-bg3 img").classList="";
      document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
      document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
      setTimeout(secondAnimation,510);
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
      function secondAnimation(){
        document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
        document.querySelector(".click-div").style.top="255px";
        document.querySelector(".level4-1-3-3").style.borderStyle="none";
        document.querySelector(".p3-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-4").style.borderStyle="solid";
        document.querySelector(".p4-click").style.visibility="visible";
      }
    }
  }
  if((currentNo - initialNo) == -1){
    if(window.getComputedStyle(document.querySelector(".black-bg5 img")).visibility === "visible"){
      document.querySelector(".black-bg5 img").classList="";
      document.querySelector(".black-bg5 img").classList.add("main-bottle5-four");
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
      setTimeout(secondAnimation,501);
      function secondAnimation(){
        document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
        document.querySelector(".click-div").style.top="255px";
        document.querySelector(".level4-1-3-5").style.borderStyle="none";
        document.querySelector(".p5-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-4").style.borderStyle="solid";
        document.querySelector(".p4-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) > 1){
    if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible" && ((diff - 1) >= z)) {
      document.querySelector(".black-bg1 img").classList="";
      document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
      setTimeout(secondAnimation,510);
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
      function secondAnimation(){
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
        document.querySelector(".click-div").style.top="355px";
        document.querySelector(".level4-1-3-1").style.borderStyle="none";
        document.querySelector(".p1-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-2").style.borderStyle="solid";
        document.querySelector(".p2-click").style.visibility="visible";
      }
      z++;
    }
    setTimeout(f1,1000);
    function f1(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible"  && ((diff - 1)>=z)){
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
        setTimeout(secondAnimation, 510);
        document.querySelector(".black-bg3 img").classList="";
          document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f2,2000);
    function f2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible"  && ((diff - 1)>=z)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
        document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
        setTimeout(secondAnimation,510);
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
        function secondAnimation(){
          document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
          document.querySelector(".click-div").style.top="255px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-4").style.borderStyle="solid";
          document.querySelector(".p4-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f3,3000);
    function f3(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"  && ((diff - 1)>=z)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
        document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
        setTimeout(secondAnimation,510)
        document.querySelector(".black-bg5 img").classList="";
        document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
        function secondAnimation(){
          document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
          document.querySelector(".click-div").style.top="205px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-5").style.borderStyle="solid";
          document.querySelector(".p5-click").style.visibility="visible";
        }
        z++;
      }
    }
  }

  initialNo = currentNo;
});

document.querySelector(".no5").addEventListener("click",function(){
  currentNo = parseInt(document.querySelector(".no5").innerHTML);
  let diff = (currentNo - initialNo);
  let z = 0;
  if((currentNo - initialNo) == 1){
    if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"){
      document.querySelector(".black-bg4 img").classList="";
      document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
      document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
      setTimeout(secondAnimation,510)
      document.querySelector(".black-bg5 img").classList="";
      document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
      function secondAnimation(){
        document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
        document.querySelector(".click-div").style.top="205px";
        document.querySelector(".level4-1-3-4").style.borderStyle="none";
        document.querySelector(".p4-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-5").style.borderStyle="solid";
        document.querySelector(".p5-click").style.visibility="visible";
      }
    }
  }

  if((currentNo - initialNo) > 1){
    if(window.getComputedStyle(document.querySelector(".black-bg1 img")).visibility==="visible"  && ((diff - 1)>=z)){
      document.querySelector(".black-bg1 img").classList="";
      document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
      setTimeout(secondAnimation,510);
      document.querySelector(".black-bg2 img").classList="";
      document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
      function secondAnimation(){
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
        document.querySelector(".click-div").style.top="355px";
        document.querySelector(".level4-1-3-1").style.borderStyle="none";
        document.querySelector(".p1-click").style.visibility="hidden";
        document.querySelector(".level4-1-3-2").style.borderStyle="solid";
        document.querySelector(".p2-click").style.visibility="visible";
      }
      z++;
    }
    setTimeout(f1,1000);
    function f1(){
      if(window.getComputedStyle(document.querySelector(".black-bg2 img")).visibility==="visible" && ((diff - 1)>=z)){
        document.querySelector(".black-bg2 img").classList="";
        document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
        document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
        setTimeout(secondAnimation, 510);
        document.querySelector(".black-bg3 img").classList="";
          document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
        function secondAnimation(){
          document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
          document.querySelector(".click-div").style.top="305px";
          document.querySelector(".level4-1-3-2").style.borderStyle="none";
          document.querySelector(".p2-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-3").style.borderStyle="solid";
          document.querySelector(".p3-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f2,2000);
    function f2(){
      if(window.getComputedStyle(document.querySelector(".black-bg3 img")).visibility==="visible" && ((diff - 1)>=z)){
        document.querySelector(".black-bg3 img").classList="";
        document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
        document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
        setTimeout(secondAnimation,510);
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
        function secondAnimation(){
          document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
          document.querySelector(".click-div").style.top="255px";
          document.querySelector(".level4-1-3-3").style.borderStyle="none";
          document.querySelector(".p3-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-4").style.borderStyle="solid";
          document.querySelector(".p4-click").style.visibility="visible";
        }
        z++;
      }
    }
    setTimeout(f3,3000);
    function f3(){
      if(window.getComputedStyle(document.querySelector(".black-bg4 img")).visibility==="visible"  && ((diff - 1)>=z)){
        document.querySelector(".black-bg4 img").classList="";
        document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
        document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
        setTimeout(secondAnimation,510)
        document.querySelector(".black-bg5 img").classList="";
        document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
        function secondAnimation(){
          document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
          document.querySelector(".click-div").style.top="205px";
          document.querySelector(".level4-1-3-4").style.borderStyle="none";
          document.querySelector(".p4-click").style.visibility="hidden";
          document.querySelector(".level4-1-3-5").style.borderStyle="solid";
          document.querySelector(".p5-click").style.visibility="visible";
        }
        z++;
      }
    }
  }

  initialNo = currentNo;
});

/********** dragging level4 images *******/

/********** level4 1st image ************/

let isDown1=false;
let mouseCurrPos1=-1;
document.querySelector(".black-bg1 img").addEventListener("mousedown",function(event){
  isDown1=true;
  mouseCurrPos1 = event.clientX;
  document.querySelector(".black-bg1 img").classList = "";
  document.querySelector(".black-bg1 img").classList.add("main-bottle1-one");
});

document.querySelector(".black-bg1 img").addEventListener("mouseup",function(event){
  isDown1=false;
  let v = window.getComputedStyle(document.querySelector(".black-bg1 img"));
  let matrix = new WebKitCSSMatrix(v.transform);

  if(matrix.m41 >= 163){
    document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-three");
    document.querySelector(".black-bg5 img").classList = "";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-three");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-three");
      document.querySelector(".black-bg1 img").style.transform = "";
      document.querySelector(".click-div").style.top="205px";
      document.querySelector(".level4-1-3-1").style.borderStyle="none";
      document.querySelector(".p1-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-5").style.borderStyle="solid";
      document.querySelector(".p5-click").style.visibility="visible";
    }
  }
  else if(matrix.m41 <= -132){
    document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-one");
    document.querySelector(".black-bg2 img").classList = "";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-one");
    setTimeout(f2,450);
    function f2(){
      document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-one");
      document.querySelector(".black-bg1 img").style.transform = "";
      document.querySelector(".click-div").style.top="355px";
      document.querySelector(".level4-1-3-1").style.borderStyle="none";
      document.querySelector(".p1-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-2").style.borderStyle="solid";
      document.querySelector(".p2-click").style.visibility="visible";
    }
  }
  else{
      document.querySelector(".black-bg1 img").style.transform = "translate(0)";
  }
});

document.querySelector(".black-bg1 img").addEventListener("mousemove",move1);

function move1(e){
  if(isDown1){
    document.querySelector(".black-bg1 img").style.transform = `translate(${e.clientX - mouseCurrPos1}px)`;
    }
}


/******* level4 2nd image ********/


let isDown2=false;
let mouseCurrPos2 = -1;
document.querySelector(".black-bg2 img").addEventListener("mousedown",function(event){
  isDown2=true;
  mouseCurrPos2 = event.clientX;
  document.querySelector(".black-bg2 img").classList = "";
  document.querySelector(".black-bg2 img").classList.add("main-bottle2-two");
});
document.querySelector(".black-bg2 img").addEventListener("mouseup",function(event){
  isDown2=false;
  let v = window.getComputedStyle(document.querySelector(".black-bg2 img"));
  let matrix = new WebKitCSSMatrix(v.transform);
  console.log(matrix.m41);

  if(matrix.m41 >= 163){
    document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-three");
    document.querySelector(".black-bg1 img").classList = "";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-four");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg1 img").classList.add("js-back-main-bottle1-four");
      document.querySelector(".black-bg2 img").style.transform = "";
      document.querySelector(".click-div").style.top="405px";
      document.querySelector(".level4-1-3-2").style.borderStyle="none";
      document.querySelector(".p2-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-1").style.borderStyle="solid";
      document.querySelector(".p1-click").style.visibility="visible";
    }
  }
  else if(matrix.m41 <= -132){
    document.querySelector(".black-bg2 img").classList.add("js-front-main-bottle2-two");
    document.querySelector(".black-bg3 img").classList = "";
    document.querySelector(".black-bg3 img").classList.add("main-bottle3-one");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-one");
      document.querySelector(".black-bg2 img").style.transform = "";
      document.querySelector(".click-div").style.top="305px";
      document.querySelector(".level4-1-3-2").style.borderStyle="none";
      document.querySelector(".p2-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-3").style.borderStyle="solid";
      document.querySelector(".p3-click").style.visibility="visible";
    }
  }
  else{
      document.querySelector(".black-bg2 img").style.transform = "translate(39px)";
  }
});

document.querySelector(".black-bg2 img").addEventListener("mousemove",function(event){
  if(isDown2){
    document.querySelector(".black-bg2 img").style.transform = `translate(${event.clientX - mouseCurrPos2}px)`;
  }
});

/******* level4 3rd image ********/


let isDown3=false;
let mouseCurrPos3 = -1;
document.querySelector(".black-bg3 img").addEventListener("mousedown",function(event){
  isDown3=true;
  mouseCurrPos3 = event.clientX;
  document.querySelector(".black-bg3 img").classList = "";
  document.querySelector(".black-bg3 img").classList.add("main-bottle3-two");
});
document.querySelector(".black-bg3 img").addEventListener("mouseup",function(event){
  isDown3=false;
  let v = window.getComputedStyle(document.querySelector(".black-bg3 img"));
  let matrix = new WebKitCSSMatrix(v.transform);
  console.log(matrix.m41);

  if(matrix.m41 >= 163){
    document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-three");
    document.querySelector(".black-bg2 img").classList = "";
    document.querySelector(".black-bg2 img").classList.add("main-bottle2-four");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg2 img").classList.add("js-back-main-bottle2-four");
      document.querySelector(".black-bg3 img").style.transform = "";
      document.querySelector(".click-div").style.top="355px";
      document.querySelector(".level4-1-3-3").style.borderStyle="none";
      document.querySelector(".p3-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-2").style.borderStyle="solid";
      document.querySelector(".p2-click").style.visibility="visible";
    }
  }
  else if(matrix.m41 <= -132){
    document.querySelector(".black-bg3 img").classList.add("js-front-main-bottle3-two");
    document.querySelector(".black-bg4 img").classList = "";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-one");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-one");
      document.querySelector(".black-bg3 img").style.transform = "";
      document.querySelector(".click-div").style.top="255px";
      document.querySelector(".level4-1-3-3").style.borderStyle="none";
      document.querySelector(".p3-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-4").style.borderStyle="solid";
      document.querySelector(".p4-click").style.visibility="visible";
    }
  }
  else{
      document.querySelector(".black-bg3 img").style.transform = "translate(73px)";
  }
});

document.querySelector(".black-bg3 img").addEventListener("mousemove",function(event){
  if(isDown3){
    document.querySelector(".black-bg3 img").style.transform = `translate(${event.clientX - mouseCurrPos3}px)`;
  }
});

/********* level4 4th image ************/

let isDown4=false;
let mouseCurrPos4 = -1;
document.querySelector(".black-bg4 img").addEventListener("mousedown",function(event){
  isDown4=true;
  mouseCurrPos4 = event.clientX;
  document.querySelector(".black-bg4 img").classList = "";
  document.querySelector(".black-bg4 img").classList.add("main-bottle4-two");
});
document.querySelector(".black-bg4 img").addEventListener("mouseup",function(event){
  isDown4=false;
  let v = window.getComputedStyle(document.querySelector(".black-bg4 img"));
  let matrix = new WebKitCSSMatrix(v.transform);
  console.log(matrix.m41);

  if(matrix.m41 >= 163){
    document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-three");
    document.querySelector(".black-bg3 img").classList = "";
    document.querySelector(".black-bg3 img").classList.add("main-bottle3-four");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg3 img").classList.add("js-back-main-bottle3-four");
      document.querySelector(".black-bg4 img").style.transform = "";
      document.querySelector(".click-div").style.top="305px";
      document.querySelector(".level4-1-3-4").style.borderStyle="none";
      document.querySelector(".p4-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-3").style.borderStyle="solid";
      document.querySelector(".p3-click").style.visibility="visible";
    }
  }
  else if(matrix.m41 <= -132){
    document.querySelector(".black-bg4 img").classList.add("js-front-main-bottle4-two");
    document.querySelector(".black-bg5 img").classList = "";
    document.querySelector(".black-bg5 img").classList.add("main-bottle5-one");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-one");
      document.querySelector(".black-bg4 img").style.transform = "";
      document.querySelector(".click-div").style.top="205px";
      document.querySelector(".level4-1-3-4").style.borderStyle="none";
      document.querySelector(".p4-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-5").style.borderStyle="solid";
      document.querySelector(".p5-click").style.visibility="visible";
    }
  }
  else{
      document.querySelector(".black-bg4 img").style.transform = "translate(67px)";
  }
});

document.querySelector(".black-bg4 img").addEventListener("mousemove",function(event){
  if(isDown4){
    document.querySelector(".black-bg4 img").style.transform = `translate(${event.clientX - mouseCurrPos4}px)`;
  }
});

/********** level4 5th image ***********/

let isDown5=false;
let mouseCurrPos5 = -1;
document.querySelector(".black-bg5 img").addEventListener("mousedown",function(event){
  isDown5=true;
  mouseCurrPos5 = event.clientX;
  document.querySelector(".black-bg5 img").classList = "";
  document.querySelector(".black-bg5 img").classList.add("main-bottle5-two");
});
document.querySelector(".black-bg5 img").addEventListener("mouseup",function(event){
  isDown5=false;
  let v = window.getComputedStyle(document.querySelector(".black-bg5 img"));
  let matrix = new WebKitCSSMatrix(v.transform);
  console.log(matrix.m41);

  if(matrix.m41 >= 163){
    document.querySelector(".black-bg5 img").classList.add("js-back-main-bottle5-four");
    document.querySelector(".black-bg4 img").classList = "";
    document.querySelector(".black-bg4 img").classList.add("main-bottle4-four");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg4 img").classList.add("js-back-main-bottle4-four");
      document.querySelector(".black-bg5 img").style.transform = "";
      document.querySelector(".click-div").style.top="255px";
      document.querySelector(".level4-1-3-5").style.borderStyle="none";
      document.querySelector(".p5-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-4").style.borderStyle="solid";
      document.querySelector(".p4-click").style.visibility="visible";
    }
  }
  else if(matrix.m41 <= -132){
    document.querySelector(".black-bg5 img").classList.add("js-front-main-bottle5-two");
    document.querySelector(".black-bg1 img").classList = "";
    document.querySelector(".black-bg1 img").classList.add("main-bottle1-two");
    setTimeout(f1,450);
    function f1(){
      document.querySelector(".black-bg1 img").classList.add("js-front-main-bottle1-two");
      document.querySelector(".black-bg5 img").style.transform = "";
      document.querySelector(".click-div").style.top="405px";
      document.querySelector(".level4-1-3-5").style.borderStyle="none";
      document.querySelector(".p5-click").style.visibility="hidden";
      document.querySelector(".level4-1-3-1").style.borderStyle="solid";
      document.querySelector(".p1-click").style.visibility="visible";
    }
  }
  else{
      document.querySelector(".black-bg5 img").style.transform = "translate(32px)";
  }
});

document.querySelector(".black-bg5 img").addEventListener("mousemove",function(event){
  if(isDown5){
    document.querySelector(".black-bg5 img").style.transform = `translate(${event.clientX - mouseCurrPos5}px)`;
  }
});


/******** level6 animate when visible ***********/

let imgOne = document.querySelector(".level6-img1");
let imgTwo = document.querySelector(".level6-img2");

let observer1 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    console.log(entry.isIntersecting);
    entry.target.classList.toggle("js-level6-img1",entry.isIntersecting);
  })
}, {threshold: 0.2});
observer1.observe(imgOne);

let observer2 = new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    console.log(entry.isIntersecting);
    entry.target.classList.toggle("js-level6-img2",entry.isIntersecting);
  })
}, {threshold: 0.2});
observer2.observe(imgTwo);




document.querySelector("body").addEventListener("click",function(event){
  document.querySelector(".level8-color1").classList.remove("js-level8-color1");
  document.querySelector(".level8-color3").classList.remove("js-level8-color3");
  event.stopPropagation();
});


document.querySelector(".level8-p2").addEventListener("click",function(event){
  document.querySelector(".level8-color1").classList.add("js-level8-color1");
  document.querySelector(".level8-color3").classList.remove("js-level8-color3");
  event.stopPropagation();
});


document.querySelector(".level8-p2").addEventListener("keypress",function(){
  document.querySelector(".level8-p2").removeAttribute("data-placeholder");
});
document.querySelector(".level8-p2").addEventListener("keydown",function(event){
  if(event.keyCode===8){
    if(document.querySelector(".level8-p2").innerHTML.length===1){
      document.querySelector(".level8-p2").setAttribute("data-placeholder","name");
    }
  }
});


document.querySelector(".level8-p6").addEventListener("keypress",function(){
  document.querySelector(".level8-p6").removeAttribute("data-placeholder");
});
document.querySelector(".level8-p6").addEventListener("keydown",function(event){
  if(event.keyCode===8){
    if((document.querySelector(".level8-p6").innerHTML.length===1) && (document.querySelector(".level8-select2").options[document.querySelector(".level8-select2").
    selectedIndex].text)==="e-mail"){
      document.querySelector(".level8-p6").setAttribute("data-placeholder","vinit@gmail.com");
    }
    else if((document.querySelector(".level8-p6").innerHTML.length===1) && (document.querySelector(".level8-select2").options[document.querySelector(".level8-select2").
    selectedIndex].text)==="phone number"){
      document.querySelector(".level8-p6").setAttribute("data-placeholder","+91 7904596118");
    }
  }
});



document.querySelector(".level8-select1").addEventListener("change",function(){
  if((document.querySelector(".level8-select1").options[document.querySelector(".level8-select1").
  selectedIndex].text)==="label"){
    document.querySelector(".level8-select1").style.width="115px";
  }
  else if((document.querySelector(".level8-select1").options[document.querySelector(".level8-select1").
  selectedIndex].text)==="my future"){
    document.querySelector(".level8-select1").style.width="193px";
  }
  else{
    document.querySelector(".level8-select1").style.width="260px";
  }
});


document.querySelector(".level8-select2").addEventListener("change",function(){
  if((document.querySelector(".level8-select2").options[document.querySelector(".level8-select2").
  selectedIndex].text)==="e-mail"){
    document.querySelector(".level8-select2").style.width="138px";
    document.querySelector(".level8-p6").removeAttribute("data-placeholder");
    document.querySelector(".level8-p6").setAttribute("data-placeholder","vinit@gmail.com");
  }
  else{
    document.querySelector(".level8-select2").style.width="288px";
    document.querySelector(".level8-p6").removeAttribute("data-placeholder");
    document.querySelector(".level8-p6").setAttribute("data-placeholder","+91 7904596118");
  }
});



document.querySelector(".level8-p6").addEventListener("click",function(event){
  document.querySelector(".level8-color3").classList.add("js-level8-color3");
  document.querySelector(".level8-color1").classList.remove("js-level8-color1");
  event.stopPropagation();
});


document.querySelector(".down").addEventListener("click",function(){
  document.querySelector(".level3-1").scrollIntoView({behavior: 'smooth'});
})
