var winW=document.documentElement.clientWidth;
var desW=640;
//  这个desW要根据设计稿的宽度进行修改
var rem=desW/100;
if(winW>desW)winW=desW;//如果是PC端，就不修改字体了
//    winW=winW>desW?desW:winW;//也可以这么写
document.documentElement.style.fontSize=winW/rem+"px";