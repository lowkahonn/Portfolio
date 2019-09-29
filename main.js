var button = document.getElementById("back-to-top-sticky");


window.onscroll = function() {onscrollFunction()};

function onscrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        button.style.visibility = 'visible';
        button.style.opacity = 1;
    } else {
        button.style.visibility = 'hidden';
        button.style.opacity = 0;
    }
}
var html = document.getElementsByTagName("html")[0];
function goTop() {
    var difference = 0 - html.scrollTop;
    var tick = 10;
    var duration = 300;
    var perTick = difference / duration * tick;
    var interval = setInterval(function() {
        html.scrollTop += perTick;
        if (html.scrollTop === 0) {
            clearInterval(interval);
        }
    }, tick);
}