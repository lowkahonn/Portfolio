var button = document.getElementById("back-to-top-sticky");
var buttonIcon = document.getElementById("topicon");
var html = document.getElementsByTagName("html")[0];
var modal = document.getElementById("modal-content");
var modalImg = document.getElementById("modal-img");
var pygame = document.getElementById("pygame-gif");
var projectImg1 = document.getElementById("project-image1");
var projectImg2 = document.getElementById("project-image2");
var projectImg3 = document.getElementById("project-image3");
var close = document.getElementById("close");

button.onclick = function() {
    var interval = setInterval(function() {
        html.scrollTop += -html.scrollTop / 100 * 10;
        if(html.scrollTop === 0) clearInterval(interval);
    }, 10);
};

buttonIcon.onclick = function() {
    var interval = setInterval(function() {
        html.scrollTop += -html.scrollTop / 100 * 10;
        if(html.scrollTop === 0) clearInterval(interval);
    }, 10);
}

window.onscroll = function() {onscrollFunction()};

projectImg1.onclick = click;

projectImg2.onclick = click;

projectImg3.onclick = click;

pygame.onclick = click;

function click() {
    modal.style.display = "block";
    modalImg.src = this.src;
}

close.onclick = function() {
    modal.style.display = "none";
}

function onscrollFunction() {
    if (html.scrollTop > 200) {
        button.style.visibility = 'visible';
        button.style.opacity = 1;
        buttonIcon.style.visibility = 'visible';
        buttonIcon.style.opacity = 1;
    } else {
        button.style.visibility = 'hidden';
        button.style.opacity = 0;
        buttonIcon.style.visibility = 'hidden';
        buttonIcon.style.opacity = 0;
    }
}
function scrollTo(id) {
    var doc = document.getElementById(id);
    var top = doc.getBoundingClientRect().top;
    var difference = top;
    var tick = 10;
    var paddingTop = 100;
    var duration = 150;
    var perTick = difference / duration * tick;
    var interval = setInterval(function() {
        top = doc.getBoundingClientRect().top;
        if (top < paddingTop) {
            clearInterval(interval);
        } else {
            if (top - paddingTop > paddingTop) {
                html.scrollTop += perTick;
            } else {
                html.scrollTop += (top - paddingTop + 1);
            }
        }
    }, tick);
}


