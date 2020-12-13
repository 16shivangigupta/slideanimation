var box1 = document.querySelector('.box1');
var boxA = document.querySelector('.boxA');
var button = document.querySelector('.box1 button');
var icon = document.querySelector('.boxA i');
var back = document.querySelector('.back');

button.addEventListener('click',function(){
    box1.style.transform = 'translateX(-100%)';
    boxA.style.transform = 'translateX(-100%)';
})
    
icon.addEventListener('click',function(){
    boxA.style.transform = 'translateX(0%)';
    box1.style.transform = 'translateX(0%)';
})
    

