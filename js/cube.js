/*
 * Created by ${A.H} on 2016/01/29.
 */

var main = document.getElementById("main");
var winW = document.documentElement.clientWidth;
var winH = document.documentElement.clientHeight;
var desW = 640;
var desH = 960;
if (winW / winH > desW / desH) {
    main.style.webkitTransform = "scale(" + winW / desW + ")";
} else {
    main.style.webkitTransform = "scale(" + winH / desH + ")";
}

function getEle(ele) {
    return document.querySelector(ele);
}
var cube = getEle(".cube");
var cubeBox = getEle('.cubeBox');
var cubeLis = document.querySelectorAll('.cubeBox>li');
(function fnCube() {
    var startTouch = {x: 0, y: 0};
    var startX = -45;
    var startY = -45;
    cubeBox.style.webkitTransform = "scale(0.7) rotateX(-45deg) rotateY(-45deg)";
    [].forEach.call(cubeLis, function () {
        arguments[0].addEventListener('touchstart', start, false);
        arguments[0].addEventListener('touchmove', move, false);
        arguments[0].addEventListener('touchend', end, false);
    });
    function start(e) {
        startTouch.x = e.changedTouches[0].pageX;
        startTouch.y = e.changedTouches[0].pageY;
    }

    function move(e) {
        var moveTouchX = e.changedTouches[0].pageX;
        var moveTouchY = e.changedTouches[0].pageY;
        this.changePosX = moveTouchX - startTouch.x;
        this.changePosY = moveTouchY - startTouch.y;
        this.parentNode.style.webkitTransform = "scale(0.7)  rotateX(" + (-startY - this.changePosY) + "deg) rotateY(" + (startX + this.changePosX) + "deg)";
    }

    function end() {
        startX += this.changePosX;
        startY += this.changePosY;
    }
})();
document.addEventListener('touchstart', function () {
}, false);