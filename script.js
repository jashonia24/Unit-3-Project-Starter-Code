/* Declare variables below to save the different sections (divs) of your story*/
let word=document.querySelector(".title");
let title=document.querySelector(".story-opening");
let click=document.querySelector(".buttons");
let buttonOne=document.querySelector(".option-one");
let buttonTwo=document.querySelector(".option-two");
let buttonThree=document.querySelector(".option-three");
let buttonFour=document.querySelector(".option-four");
let buttonFive=document.querySelector(".option-five");
let firstOption=document.querySelector(".option-one-screen");
let seconOption=document.querySelector(".option-two-screen");
let lastOneOption=document.querySelector(".option-one-end");
let lastOption=document.querySelector(".option-two-end");
let path=document.querySelector(".path");
let badEnd=document.querySelector(".run");
let tryagain=document.querySelector(".option-six");
let newOne=document.querySelector(".tryagain");

buttonOne.onclick=function(){
firstOption.style.display="block";
    click.style.display="none";
    title.style.display="none";
    
   
    

};
buttonTwo.onclick=function(){
seconOption.style.display="block";
    click.style.display="none";
    title.style.display="none";
    word.style.display="none";
};

buttonFour.onclick=function(){
seconOption.style.display="block";
    click.style.display="none";
    title.style.display="none";
    path.style.display="none";
     word.style.display="none";
   
};

buttonThree.onclick=function(){
lastOneOption.style.display="block";
    click.style.display="none";
    title.style.display="none";
    word.style.display="none";
    path.style.display="none";
    word.style.display="none";
    
};
   
buttonFive.onclick=function(){
lastOption.style.display="block";
    click.style.display="none";
    title.style.display="none";
     badEnd.style.display="none";
     word.style.display="none";
   
};
tryagain.onclick=function(){
    click.style.display="block";
    title.style.display="block";
    newOne.style.display="none";
    
    
};
