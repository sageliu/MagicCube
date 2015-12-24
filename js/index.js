/*var winW=document.documentElement.clientWidth;
 var desW=640;
 //  这个desW要根据设计稿的宽度进行修改
 var rem=desW/100;
 if(winW>desW)winW=desW;//如果是PC端，就不修改字体了
 //    winW=winW>desW?desW:winW;//也可以这么写
 document.documentElement.style.fontSize=winW/rem+"px";*/

var gameTime = document.querySelector(".gameTime");
gameTime.innerHTML = 300;

var timer1 = window.setInterval(function () {
    gameTime.innerHTML < 290 ? window.clearInterval(timer1) : gameTime.innerHTML--;
}, 1000);

var user = document.getElementById('user');
var btnLeft = document.getElementById("btnLeft");
var btnRight = document.getElementById("btnRight");
var btnJump = document.getElementById("btnJump");
var step = 0.2;
var jump = 0.35;
/*

 实现移动与跳跃的思路：
 1.1如果点击的是btnLeft，（则每点击一下，这样实现起来比较简单）会向右移动0.2rem/s，反之向左移动0.2rem/s，这个可以用累加的方式实现，只要按住的时候，就一直累加，移动的位移等于一直在+=step，这个可以用getTime来实现，只要getTime>1000,就触发一次位移改变，实现无间断的动画效果，
 1.2松开按钮的时候，不移动，mouseup事件时候。

 2.1点击的是btnJump，每点击一下，user跳起0.35rem，也就是bottom=0.35rem，并落回到地面，也就算bottom=0，此动作花费的时间为1.5秒，
 2.2此期间的btnJump按钮不可以点击，也就是失去了点击事件，这个可以利用定时器，实现1.6秒之后绑定上这个可以点击的事件。

 实现顶东西的效果的思路
 3.1将所有的砖块放置到一个数组中，触发了btnJump的事件的时候，如果人物的(left+width)/2大于砖块的left，并且小于砖块的left+width，则视为顶到了，
 3.2此时需要判断人物的状态，如果是大号的，就可以顶brick1，并且brick1的样式发生改变，图片就变成顶碎了，然后0.5秒之后变成没有了，如果是小号的人物，则顶brick1的时候，人物的上边距应该最大等于brick2的下边距+0.02rem，brick1的bottom+0.02rem，0.2秒之后，都落回去到原始的位置。人物继续执行btnJump的事件【这里权衡一下实现】
 3.3如果是brick2，则都不能顶，人物的上边距应该最大等于brick2的下边距
 3.4如果是brick3，则从里面出现一个金币或者蘑菇，出现的方式是1.5秒从brick3的位置向上慢慢出来，金币会消失，蘑菇会向右移动0.1rem/s，直到蘑菇的right>=遇到的第一个hose（其实这里是指定的）的left，会向左移动，如果移动到的left=0时，则remove这个蘑菇，如果中间人物的bottom=蘑菇的bottom，mRight>uLeft>mLeft||mRight>uRight>mLeft,那么蘑菇remove，人变大。
 */
var bg = document.getElementsByClassName("main")[0];
function move(e) {
var rem=6.4;
    var posi=bg.style;

    if (e.target === btnLeft) {
        var d=new Date();
        console.log(d.getTime());
        posi.left = parseFloat(Number(posi.left))/rem + step + "rem";

    } else if (e.target === btnRight) {
        posi.left = parseFloat(Number(posi.left))/rem + step + "rem";

    } else if (e.target === btnJump) {
        e.target.onblur();
        user.className += "jump";
        setTimeout(function () {
        }, 1600);
    }
}

    document.addEventListener('touchstart', move, false);





