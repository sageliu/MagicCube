/*var winW=document.documentElement.clientWidth;
var desW=640;
//  这个desW要根据设计稿的宽度进行修改
var rem=desW/100;
if(winW>desW)winW=desW;//如果是PC端，就不修改字体了
//    winW=winW>desW?desW:winW;//也可以这么写
document.documentElement.style.fontSize=winW/rem+"px";*/

var gameTime=document.querySelector(".gameTime");
gameTime.innerHTML=300;

var timer1=window.setInterval(function () {
    gameTime.innerHTML<290?window.clearInterval(timer1):gameTime.innerHTML--;
},1000);


var user=document.querySelector('user');



