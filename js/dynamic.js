
window.onscroll = function() {navScroll()};

function navScroll() {

    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById('nav').style.boxShadow = "0px 0 4px rgb(204, 204, 204)";
    } else {
        document.getElementById('nav').style.boxShadow = "none";
    }
}

function nav() {
    document.getElementById('nav').style.backgroundColor = "red";
}